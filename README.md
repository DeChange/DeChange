# DeChange

**DeChange** is a pioneering decentralized platform aimed at educating and empowering individuals and organizations in blockchain and decentralized technologies. By bridging the gap between learning and application in Web3, DeChange offers a comprehensive learning experience through interactive courses and practical quests.

![DeChange Banner]() <!-- Replace with actual image URL -->

## Table of Contents

1. [Introduction](#introduction)
2. [Key Values](#key-values)
3. [Features](#features)
4. [Tech Stack](#tech-stack)
5. [Smart Contract Details](#smart-contract-details)
6. [Installation](#installation)
7. [Usage](#usage)
8. [Contribution Guidelines](#contribution-guidelines)
9. [License](#license)

---

## Introduction

DeChange is a decentralized educational platform that leverages blockchain technology to provide users with a unique learning experience. The platform allows users to engage with various courses, complete quests, and earn rewards, all while ensuring transparency and security through smart contracts.

### Why DeChange?

- **Addressing Complexity**: Web3 can be overwhelming for newcomers. DeChange simplifies the learning process.
- **Hands-On Experience**: Existing platforms often focus heavily on theory. DeChange emphasizes practical, hands-on learning.
- **Reliable Credentials**: Traditional certifications can be unreliable. DeChange offers verifiable on-chain certifications that are immutable and tamper-proof.

### How DeChange Works

1. **Beginner-Friendly Courses**: Interactive modules on blockchain and decentralized technologies.
2. **Hands-On Learning**: Engage with live protocols (DeFi, NFTs, DAOs, etc.).
3. **Earn Certifications**: Receive verifiable on-chain certifications (Soulbound Tokens) upon course completion.

## Key Values

- **Interactive Learning Paths**: Tailored learning experiences that adapt to individual needs.
- **On-Chain Certifications**: Blockchain-verified NFT certificates that represent skills and credentials.
- **Marketplace for Credentials**: A platform for exchanging and showcasing earned certificates.
- **Community Engagement**: Opportunities to contribute to real-world decentralized projects and earn rewards.

## Features

- **Interactive Learning**: Participate in courses covering various aspects of blockchain and decentralized technologies.
- **Quest System**: Complete practical quests to apply learned concepts and earn rewards.
- **Multi-Wallet Support**: Integrates popular wallets like MetaMask and WalletConnect for seamless transactions.
- **Transparent Transactions**: All contributions and rewards are recorded on the blockchain, ensuring transparency.
- **User-Friendly Interface**: Designed with a focus on user experience, making it easy to navigate through courses and quests.

## Tech Stack

- **Frontend**: React, Next.js
- **Blockchain**: Ethereum
- **Wallet Integration**: MetaMask, WalletConnect
- **State Management**: React Context, Zustand
- **UI Framework**: Tailwind CSS
- **Smart Contract**: Solidity-based contracts

## Smart Contract Details

The smart contract defines several functions that facilitate user registration, quest management, and reward distribution.

### Read Functions

1. **getUser**: Fetches user details.
2. **getQuest**: Retrieves details of a specific quest.
3. **getAllQuests**: Lists all available quests.
4. **getCourses**: Fetches all courses available on the platform.
5. **getUserRewards**: Retrieves rewards earned by a user.

### Write Functions

1. **registerUser**: Allows users to register on the platform.
2. **completeQuest**: Marks a quest as completed and awards XP.
3. **createCourse**: Enables users to create new courses.
4. **claimReward**: Allows users to claim rewards for completed quests.

## Installation

To run the project locally:

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/dechange.git
   cd dechange
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create an `.env` file and add the following environment variables:

   ```plaintext
   NEXT_PUBLIC_RPC_URL=your_rpc_url_here
   NEXT_PUBLIC_CONTRACT_ADDRESS=your_contract_address_here
   NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID=your_project_id_here
   ```

4. Run the development server:

   ```bash
   npm run dev
   ```

## Usage

1. **Connect Wallet**: Connect a Web3 wallet (MetaMask, TrustWallet, etc.).
2. **Browse Courses**: Explore available courses and their details.
3. **Participate in Quests**: Engage in quests to apply your knowledge and earn rewards.
4. **Track Progress**: Monitor your learning progress and rewards earned.
5. **Claim Rewards**: Claim rewards for completed quests directly through your wallet.

## Contribution Guidelines

We welcome contributions to DeChange! To contribute:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Make your changes and commit them.
4. Push your changes and create a pull request.

## License

This project is licensed under the MIT License.

---

DeChange is not just a platform; it's a movement towards a more educated and empowered Web3 community. Join us in bridging the gap between learning and application in the decentralized world!
