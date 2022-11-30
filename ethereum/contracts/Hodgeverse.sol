// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

contract HodgeUsers {
  struct HodgeUser {
      uint id;
      address hodgeAddress;
      string codename;
      string profession;
      string description;
  }

  HodgeUser[] hodgemen;
  mapping(address => HodgeUser) public hodgeUsers;
  mapping(address => bool) public isTaken;
  uint hodgeUsersCount;

  function getHodgemen() public view returns (HodgeUser[] memory) {
      return hodgemen;
  }

  function getUser(address walletAddress) public view returns (HodgeUser memory) {
      return hodgeUsers[walletAddress];
  }

  function createUser(address userAddress, string memory cname, string memory prof, string memory desc) public {
      require(!isSet(userAddress));
      HodgeUser memory user = HodgeUser({id: hodgeUsersCount, hodgeAddress: userAddress, codename: cname, profession: prof, description: desc});
      hodgeUsers[userAddress] = user;
      hodgemen.push(user);
      isTaken[userAddress] = true;
      hodgeUsersCount++;
  }

  function modifyUser(uint userId, address userAddress, string memory cname, string memory prof, string memory desc) public {
      require(!isSet(userAddress));
      HodgeUser memory modifiedUser = HodgeUser({id: userId, hodgeAddress: userAddress, codename: cname, profession: prof, description: desc});
      hodgeUsers[userAddress] = modifiedUser;
      hodgemen[userId] = modifiedUser;
  }

  function isSet(address walletAddress) public view returns(bool) {
      return (isTaken[walletAddress]);
  }
}