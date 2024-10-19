// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

interface ISmartWallet {
    function performTransaction(address target, bytes calldata data) external;
}

interface IBaseNames {
    function validateBaseNameOwnership(address user, string memory basename) external view returns (bool);
}

interface ISoulBoundToken {
    function mintSBT(address to) external;
}

contract DeChange {
    struct User {
        string username;
        uint256 performance; // XP or any performance metric
        bool registered;
    }

    struct Course {
        uint256 courseId;
        string title;
        uint256 xpReward; // XP awarded upon completion
    }

    struct Quest {
        uint256 questId;
        string description;
        bool completed;
        uint256 xpReward; // XP awarded for completing the quest
    }

    address public owner;
    ISmartWallet public smartWallet;
    IBaseNames public baseNames;
    ISoulBoundToken public soulBoundToken; // SBT contract integration

    mapping(address => User) public users;
    mapping(uint256 => Course) public courses;
    mapping(address => mapping(uint256 => Quest)) public userQuests; // User-specific quests

    event UserRegistered(address indexed user, string username);
    event CourseEnrolled(address indexed user, uint256 courseId);
    event QuestCompleted(address indexed user, uint256 questId, uint256 xpReward);

    modifier onlyOwner() {
        require(msg.sender == owner, "Not the owner");
        _; 
    }

    constructor(address _smartWallet, address _baseNames, address _sbtAddress) {
        owner = msg.sender;
        smartWallet = ISmartWallet(_smartWallet);
        baseNames = IBaseNames(_baseNames);
        soulBoundToken = ISoulBoundToken(_sbtAddress); // Inject the SBT contract
    }

    // Register user in the system
    function registerUser(string memory username) external {
        require(!users[msg.sender].registered, "User already registered");
        users[msg.sender] = User({
            username: username,
            performance: 0,
            registered: true
        });

        initializeQuests(msg.sender); // Initialize quests for the user
        emit UserRegistered(msg.sender, username);
    }

    // Initialize quests for the user
    function initializeQuests(address user) internal {
        userQuests[user][1] = Quest({
            questId: 1,
            description: "Claim faucet at Alchemy",
            completed: false,
            xpReward: 100
        });
        userQuests[user][2] = Quest({
            questId: 2,
            description: "Swap tokens at Uniswap",
            completed: false,
            xpReward: 200
        });
        userQuests[user][3] = Quest({
            questId: 3,
            description: "Bridge tokens into Base",
            completed: false,
            xpReward: 300
        });
    }

    // Complete a quest and award XP + mint an SBT
    function completeQuest(uint256 questId) public {
        require(userQuests[msg.sender][questId].questId != 0, "Quest does not exist");
        require(!userQuests[msg.sender][questId].completed, "Quest already completed");

        userQuests[msg.sender][questId].completed = true;
        uint256 xpReward = userQuests[msg.sender][questId].xpReward;
        users[msg.sender].performance += xpReward; // Add XP to user's performance

        // Mint an SBT upon quest completion
        soulBoundToken.mintSBT(msg.sender);

        emit QuestCompleted(msg.sender, questId, xpReward);
    }
}
