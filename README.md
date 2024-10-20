<div align="center">
   
# DeChange

**DeChange** is a pioneering decentralized platform aimed at educating and empowering individuals and organizations in blockchain and decentralized technologies. By bridging the gap between learning and application in Web3, DeChange offers a comprehensive learning experience through interactive courses and practical quests.
</div>

<img width="1672" alt="Screenshot 2024-10-20 at 5 29 43 AM" src="https://github.com/user-attachments/assets/4e8d2c66-f7d2-4c10-b30d-c25b774189a0">

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
<br/>
<img width="1672" alt="Screenshot 2024-10-20 at 5 29 51 AM" src="https://github.com/user-attachments/assets/aed273cf-6d12-4914-8e35-9b65937e417b">


### How DeChange Works

1. **Beginner-Friendly Courses**: Interactive modules on blockchain and decentralized technologies.
2. **Hands-On Learning**: Engage with live protocols (DeFi, NFTs, DAOs, etc.).
3. **Earn Certifications**: Receive verifiable on-chain certifications (Soulbound Tokens) upon course completion.
<br/>
<img width="1672" alt="Screenshot 2024-10-20 at 5 29 58 AM" src="https://github.com/user-attachments/assets/783e4a5e-4b53-445a-8e25-9a42bfa1908b">


## Key Values

- **Interactive Learning Paths**: Tailored learning experiences that adapt to individual needs.
- **On-Chain Certifications**: Blockchain-verified NFT certificates that represent skills and credentials.
- **Marketplace for Credentials**: A platform for exchanging and showcasing earned certificates.
- **Community Engagement**: Opportunities to contribute to real-world decentralized projects and earn rewards.
<br/>
<img width="1672" alt="Screenshot 2024-10-20 at 5 37 15 AM" src="https://github.com/user-attachments/assets/8e8628c1-95ac-4c86-b8c7-4fc197ceb61d">


## Features

- **Interactive Learning**: Participate in courses covering various aspects of blockchain and decentralized technologies.
- **Quest System**: Complete practical quests to apply learned concepts and earn rewards.
- **Multi-Wallet Support**: Integrates popular wallets like MetaMask and WalletConnect for seamless transactions.
- **Transparent Transactions**: All contributions and rewards are recorded on the blockchain, ensuring transparency.
- **User-Friendly Interface**: Designed with a focus on user experience, making it easy to navigate through courses and quests.
<br/>
<img width="1672" alt="Screenshot 2024-10-20 at 5 30 10 AM" src="https://github.com/user-attachments/assets/c5424b88-75e3-4177-9df3-b790e62548d6">


## Tech Stack

- **Frontend**: React, Next.js
- **Blockchain**: Base
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
<br/>
<img width="1672" alt="Screenshot 2024-10-20 at 5 30 16 AM" src="https://github.com/user-attachments/assets/e0b51cc5-9e12-4f36-80b1-26aa7847ddab">


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
<br/>
<img width="1672" alt="Screenshot 2024-10-20 at 5 37 37 AM" src="https://github.com/user-attachments/assets/0b1daeb3-1f49-4208-8358-bfab65315d96">


## Contribution Guidelines

We welcome contributions to DeChange! To contribute:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Make your changes and commit them.
4. Push your changes and create a pull request.

## License

This project is licensed under the MIT License.

<br/>
<img width="1672" alt="Screenshot 2024-10-20 at 5 36 42 AM" src="https://github.com/user-attachments/assets/00b6b0b3-db30-4ed1-8fca-eacab260c5a8">

<div align="center">
<br/>
DeChange is not just a platform; it's a movement towards a more educated and empowered Web3 community. Join us in bridging the gap between learning and application in the decentralized world!
</div>
