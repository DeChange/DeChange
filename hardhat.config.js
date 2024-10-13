require("@nomicfoundation/hardhat-ethers");
require('@nomicfoundation/hardhat-toolbox');
require("dotenv").config();

const { ALCHEMY_RPC_URL, PRIVATE_KEY, ETHERSCAN_API_KEY } = process.env

module.exports = {
  solidity: "0.8.1",
  networks: {
    base: {
      url: process.env.ALCHEMY_RPC_URL,
      chainId: 84532,
      accounts: [process.env.PRIVATE_KEY],
    },
  },

//   sourcify: {
//     enabled: true
//   },

//   etherscan: {
//     apiKey: {
//       scroll: process.env.ETHERSCAN_API_KEY,
//     },
//     customChains: [
//       {
//         network: 'scroll',
//         chainId: 534351,
//         urls: {
//           apiURL: 'https://api-sepolia.scrollscan.com/api',
//           browserURL: 'https://sepolia.scrollscan.com/',
//         },
//       },
//     ],
//   },
} 
