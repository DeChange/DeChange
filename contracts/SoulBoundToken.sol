// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract SoulBoundToken is ERC721, Ownable {
    constructor() ERC721("SoulBoundToken", "SBT") {}

    function mint(address to, uint256 tokenId) external onlyOwner {
        _safeMint(to, tokenId);
    }

    // Override _beforeTokenTransfer to make tokens non-transferable
    function _beforeTokenTransfer(
        address from,
        address to,
        uint256 tokenId,
        uint256 batchSize
    ) internal virtual override {
        require(from == address(0), "Soulbound tokens are non-transferable");
        super._beforeTokenTransfer(from, to, tokenId, batchSize);
    }

    // Prevent token approvals (no approval for soulbound tokens)
    function approve(address, uint256) public virtual override {
        revert("Soulbound tokens cannot be approved");
    }

    function setApprovalForAll(address, bool) public virtual override {
        revert("Soulbound tokens cannot set approval for all");
    }
}
