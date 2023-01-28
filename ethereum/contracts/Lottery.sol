// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

contract Lottery {
    address public manager;
    address payable[] public players;
    address public winner;
    uint public participants;

    constructor() {
        manager = msg.sender;
    }

    function enter() public payable {
        require(msg.value > 0.01 ether);
        players.push(payable(msg.sender));
        participants++;
    }

    function random() private view returns (uint) {
        return uint(keccak256(abi.encodePacked(block.difficulty, block.timestamp, players)));
    }

    function pickWinner() public restricted {
        uint index = random() % players.length;
        winner = players[index];
        players[index].transfer(address(this).balance);
        players = new address payable[](0);
    }

    modifier restricted() {
        require(msg.sender == manager);
        _;
    }

    function getPlayers() public view returns (address payable[] memory) {
        return players;
    }
}