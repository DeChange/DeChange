async function main() {
  const [deployer] = await ethers.getSigners();

  console.log("Deploying contracts with the account:", deployer.address);
  console.log("Account balance:", (await deployer.provider.getBalance(deployer.address)).toString());

  // SoulBoundToken address
  const soulBoundTokenAddress = "0xD0957D9219EB60Af476D86b240650BB6785b1599";

   // Deploy SoulBoundToken contract
   const SoulBoundToken = await ethers.getContractFactory("SoulBoundToken");
   const soulBoundToken = await SoulBoundToken.deploy();
   await soulBoundToken.deployed();
   console.log("SoulBoundToken deployed to:", soulBoundToken.address);

  // Deploy DeChange contract
  const DeChange = await ethers.getContractFactory("DeChange");

  // Use zero address as a placeholder for baseNamesAddress
  const smartWalletAddress = "0x33040e379990614f6c890E9E7f62FF6A022EE326";
  const baseNamesAddress = "0x0000000000000000000000000000000000000000";

  const deChange = await DeChange.deploy(smartWalletAddress, baseNamesAddress, soulBoundTokenAddress);
  await deChange.waitForDeployment();
  console.log("DeChange contract deployed to:", await deChange.getAddress());
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
