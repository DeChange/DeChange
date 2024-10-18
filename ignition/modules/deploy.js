async function main() {
  const [deployer] = await ethers.getSigners();

  console.log("Deploying contracts with the account:", deployer.address);
 // console.log("Account balance:", (await deployer.getBalance()).toString());

  // Deploy SoulBoundToken contract
  const SoulBoundToken = await ethers.getContractFactory("SoulBoundToken");
  const soulBoundToken = await SoulBoundToken.deploy();
  await soulBoundToken.deployed();
  console.log("SoulBoundToken deployed to:", soulBoundToken.address);

  // Deploy DeChange contract
  const DeChange = await ethers.getContractFactory("DeChange");

  // Replace with actual SmartWallet and BaseNames addresses
  const smartWalletAddress = "0x33040e379990614f6c890E9E7f62FF6A022EE326";
  const baseNamesAddress = "0xmelasin⚑⚑.base.eth";

  const deChange = await DeChange.deploy(smartWalletAddress, baseNamesAddress, soulBoundToken.address);
  await deChange.deployed();
  console.log("DeChange contract deployed to:", deChange.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
