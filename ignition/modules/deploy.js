// scripts/deploy.js
async function main() {
  const [deployer] = await ethers.getSigners();

  console.log("Deploying contracts with the account:", deployer.address);

  const balance = await deployer.getBalance();
  console.log("Account balance:", ethers.utils.formatEther(balance, 18));

  // Replace these with the actual addresses of the deployed smartWallet and baseNames contracts
  const smartWalletAddress = "0xYourSmartWalletAddress"; // Address of the deployed SmartWallet contract
  const baseNamesAddress = "0xYourBaseNamesAddress"; // Address of the deployed BaseNames contract

  const DeChange = await ethers.getContractFactory("DeChange");
  const deChange = await DeChange.deploy(smartWalletAddress, baseNamesAddress);

  console.log("DeChange contract deployed to:", deChange.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
      console.error(error);
      process.exit(1);
  });
