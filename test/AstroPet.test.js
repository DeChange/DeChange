const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("AstroPet Contract", function () {
  let AstroPet, astroPet, owner, addr1, addr2;

  beforeEach(async function () {
    // Get the ContractFactory and Signers here.
    AstroPet = await ethers.getContractFactory("AstroPet");
    [owner, addr1, addr2] = await ethers.getSigners();

    // Deploy a new AstroPet contract instance
    astroPet = await AstroPet.deploy();
    await astroPet.waitForDeployment(); // Updated for ethers v6
  });

  describe("Deployment", function () {
    it("Should set the right owner", async function () {
      expect(await astroPet.owner()).to.equal(owner.address);
    });
  });

  describe("Minting AstroPet", function () {
    it("Should mint a new AstroPet", async function () {
      await astroPet.mintAstroPet(1);
      expect(await astroPet.ownerOf(1)).to.equal(owner.address);
    });

    it("Should correctly set AstroPet attributes", async function () {
      await astroPet.mintAstroPet(1);
      const petAttributes = await astroPet.astroPets(1);

      expect(petAttributes.size).to.equal(1);
      expect(petAttributes.power).to.equal(10);
      expect(petAttributes.level).to.equal(1);
      expect(petAttributes.experience).to.equal(0);
      expect(petAttributes.evolved).to.equal(false);
    });
  });

  describe("Starting and Finalizing Missions", function () {
    beforeEach(async function () {
      await astroPet.mintAstroPet(1);
    });

    it("Should start a mission for AstroPet", async function () {
      await astroPet.startMission(1, 1);
      const startBlock = await astroPet.missionStartBlock(1);
      expect(startBlock).to.be.gt(0);
    });

    it("Should revert if mission path is invalid", async function () {
      await expect(astroPet.startMission(1, 4)).to.be.revertedWith("Invalid mission path.");
    });

    it("Should finalize a mission after sufficient blocks have passed", async function () {
      await astroPet.startMission(1, 1);

      // Wait for 6 blocks to pass
      for (let i = 0; i < 6; i++) {
        await ethers.provider.send("evm_mine");
      }

      await expect(astroPet.finalizeMission(1)).to.emit(astroPet, "MissionOutcome");
    });

    it("Should revert if trying to finalize mission too early", async function () {
      await astroPet.startMission(1, 1);
      await expect(astroPet.finalizeMission(1)).to.be.revertedWith("Wait for a few blocks.");
    });
  });

  describe("Battle Functionality", function () {
    beforeEach(async function () {
      await astroPet.mintAstroPet(1);
      await astroPet.mintAstroPet(2);
    });

    it("Should allow battling between two AstroPets", async function () {
      await expect(astroPet.connect(addr1).battle(1, 2)).to.be.revertedWith("You don't own this AstroPet.");
      
      await astroPet.transferFrom(owner.address, addr1.address, 1);
      await astroPet.transferFrom(owner.address, addr2.address, 2);

      await expect(astroPet.connect(addr1).battle(1, 2)).to.emit(astroPet, "MissionOutcome");
    });

    it("Should update AstroPet attributes after battle", async function () {
      await astroPet.transferFrom(owner.address, addr1.address, 1);
      await astroPet.transferFrom(owner.address, addr2.address, 2);

      const initialPower = (await astroPet.astroPets(1)).power;

      await astroPet.connect(addr1).battle(1, 2);
      const finalPower = (await astroPet.astroPets(1)).power;

      expect(finalPower).to.not.equal(initialPower);
    });

    it("Should not allow battling the same AstroPet", async function () {
      await expect(astroPet.battle(1, 1)).to.be.revertedWith("Cannot battle your own pet.");
    });
  });
});
