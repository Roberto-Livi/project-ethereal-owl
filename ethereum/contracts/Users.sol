// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

contract Users {
  struct User {
      uint id;
      address userAddress;
      string codename;
      string profession;
      string description;
  }

  User[] allUsers;
  mapping(address => User) public users;
  mapping(address => bool) public isTaken;
  uint usersCount;

  function getAllUsers() public view returns (User[] memory) {
      return allUsers;
  }

  function getUser(address walletAddress) public view returns (User memory) {
      return users[walletAddress];
  }

  function createUser(address userAddress, string memory cname, string memory prof, string memory desc) public {
      require(!isSet(userAddress));
      User memory user = User({id: usersCount, userAddress: userAddress, codename: cname, profession: prof, description: desc});
      users[userAddress] = user;
      allUsers.push(user);
      isTaken[userAddress] = true;
      usersCount++;
  }

  function modifyUser(uint userId, address userAddress, string memory cname, string memory prof, string memory desc) public {
      require(!isSet(userAddress));
      User memory modifiedUser = User({id: userId, userAddress: userAddress, codename: cname, profession: prof, description: desc});
      users[userAddress] = modifiedUser;
      allUsers[userId] = modifiedUser;
  }

  function isSet(address walletAddress) public view returns(bool) {
      return (isTaken[walletAddress]);
  }
}