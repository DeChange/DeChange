# AstroPet: A Space-Themed NFT Game

## Introduction
AstroPet is a unique NFT game where players can mint, train, and battle their AstroPets. Each AstroPet has distinct attributes and can evolve based on player interactions.

## Project Overview
AstroPet Space Adventures is a decentralized, interactive blockchain-based virtual pet game where players adopt "AstroPets" and send them on space missions to explore the universe. Each AstroPet is a unique NFT with evolving traits and powers based on player interactions and mission outcomes.
AstroPet Space Adventures allows players to mint unique AstroPets, engage them in missions, and interact with other players in a fun, vibrant space-themed environment. Players can discover rare items, evolve their pets, and battle other AstroPets.

### Deployed Smart Contract
The AstroPet smart contract has been deployed and verified on the Scroll network. You can view the verified contract at the following address: [20xe9dE092AAfEEF452EA20f84816D96598cD5023c](link_to_deployed_contract).

### Verified contract ###
Successfully verified contract AstroPet on the block explorer.
https://sepolia.scrollscan.com/address/0xe9dE092AAfEEF452EA20f84816D96598cD5023c2#code

The contract 0xe9dE092AAfEEF452EA20f84816D96598cD5023c2 has already been verified on Sourcify.
https://repo.sourcify.dev/contracts/full_match/534351/0xe9dE092AAfEEF452EA20f84816D96598cD5023c2/

### Alchemy RPC Configuration
The project utilizes the Alchemy RPC for seamless interactions with the Scroll network. The configuration can be found in the `hardhat.config.js` file:



## Features
- **Minting AstroPets**: Create unique AstroPets with diverse attributes.
- **Missions**: AstroPets can embark on space missions to gain experience.
- **Battles**: Engage in battles between AstroPets with dynamic outcomes.
- **Rare Items**: Discover rare items during missions.

## Technologies Used
- **Solidity**
- **OpenZeppelin Contracts**
- **Hardhat**
- **Ethers.js**
- **Chai and Mocha**

## Contract Overview
The `AstroPet` contract manages the minting and functionality of AstroPets, allowing players to start missions and battle each other.

## Getting Started
To set up the project locally:
    git clone <repository-url>
    cd <project-directory>

npm install
- Run the deployment script:
    npx hardhat run scripts/deploy.js --network scroll

    **deploy script**: 
    AstroPet deployed to: 20xe9dE092AAfEEF452EA20f84816D96598cD5023c2
    
- To run tests:
    npx hardhat test

License
This project is licensed under the MIT License.