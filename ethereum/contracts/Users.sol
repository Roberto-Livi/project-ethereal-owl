// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

contract Users {

    struct User {
      uint id;
      address userAddress;
      string codename;
      string profession;
      string description;
      uint[] projectIds;
    }

    struct Project {
      uint id;
      string name;
      string mission;
      address[] users;
    }

    User[] public allUsers;
    Project[] public allProjects;
    mapping(address => User) public users;
    mapping(string => uint) public profCount;
    mapping(address => bool) public walletRegistered;
    mapping(string => bool) public codenameTaken;
    mapping(string => bool) public projectNameTaken;
    uint public usersCount;
    uint public projectsCount;

    function createUser(address userAddress, string memory cname, string memory prof, string memory desc) public payable {
      require(!walletRegistered[userAddress]);
      require(!codenameTaken[cname]);

      User storage user = allUsers.push();

      user.id = usersCount;
      user.userAddress = userAddress;
      user.codename = cname;
      user.profession = prof;
      user.description = desc;

      users[userAddress] = user;
      walletRegistered[userAddress] = true;
      profCount[prof] += 1;
      usersCount++;
    }

    function modifyUser(string memory cname, string memory prof, string memory desc) public payable {
      require(walletRegistered[msg.sender]);
      require(!codenameTaken[cname]);
      User storage u = users[msg.sender];

      u.codename = cname;
      u.profession = prof;
      u.description = desc;

      allUsers[u.id] = u;
    }

    function createProject(string memory projectName, string memory projectMission) public payable {
      require(!projectNameTaken[projectName]);
      Project storage project = allProjects.push();

      project.id = projectsCount;
      project.name = projectName;
      project.mission = projectMission;
      project.users = [msg.sender];

      projectNameTaken[projectName] = true;
      users[msg.sender].projectIds.push(projectsCount);
      allUsers[users[msg.sender].id].projectIds.push(projectsCount);

      projectsCount++;
    }

}