// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
contract MockToken is ERC20 {
    
    address public owner;

    constructor() ERC20("MockToken", "MTK") {
        owner = msg.sender;
    }

    function mint(address _to, uint256 _amount) external {
        require(owner == msg.sender, "Only the owner can mint tokens.");
       _mint(_to, _amount);
    }
}