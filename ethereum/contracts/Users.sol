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

    struct Project {
        uint id;
        string name;
        string mission;
    }

    User[] public allUsers;
    Project[] public allProjects;
    mapping(address => User) public users;
    mapping(address => Project[]) public usersProjects;
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
      codenameTaken[cname] = true;
      profCount[prof] += 1;
      usersCount += 1;
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

        projectNameTaken[projectName] = true;

        usersProjects[msg.sender].push(project);
        projectsCount++;
    }

    function getProjectsFromUser() public view returns (Project[] memory) {
      return usersProjects[msg.sender];
    }

}