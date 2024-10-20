require("@nomicfoundation/hardhat-ethers");
require('@nomicfoundation/hardhat-toolbox');
require("dotenv").config();

const { ALCHEMY_RPC_URL, PRIVATE_KEY } = process.env;

module.exports = {
  solidity: "0.8.1",
  networks: {
    base: {
      url: ALCHEMY_RPC_URL || "https://base-goerli.infura.io/v3/YOUR_INFURA_PROJECT_ID", // Replace with Alchemy or Infura
      chainId: 84532, // Base testnet chainId
      accounts: [PRIVATE_KEY],
    },
  },
};
