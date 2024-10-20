require('@nomicfoundation/hardhat-ethers')
require('@nomicfoundation/hardhat-toolbox')
require('dotenv').config() // Load environment variables

const { ALCHEMY_RPC_URL, PRIVATE_KEY } = process.env

module.exports = {
  solidity: '0.8.1',
  networks: {
    baseSepolia: {
      url: [process.env.ALCHEMY_RPC_URL], // Use Base Sepolia RPC URL from .env
      chainId: 534351, // Base Sepolia chain ID
      accounts: [process.env.PRIVATE_KEY], // Private key from .env
    },
  },
}
