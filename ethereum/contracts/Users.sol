// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

contract Users {

    struct User {
        uint id;
        address userAddress;
        string codename;
        string profession;
        string description;
        uint projectsInvolved;
    }

    struct Project {
        uint id;
        string name;
        string mission;
        uint membersCount;
    }

    address public manager;
    User[] public allUsers;
    Project[] public allProjects;
    User[] public featuredProfiles;
    Project[] public featuredProjects;
    mapping(address => User) public users;
    mapping(address => Project[]) public usersProjects;
    mapping(uint => User[]) public projectMembers;
    mapping(string => User) public getUserByCodename;
    mapping(string => uint) public profCount;
    mapping(address => bool) public walletRegistered;
    mapping(string => bool) public codenameTaken;
    mapping(string => bool) public projectNameTaken;
    uint public usersCount;
    uint public projectsCount;

    constructor() {
        manager = msg.sender;
    }

    modifier restricted() {
        require(msg.sender == manager);
        _;
    }

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
      getUserByCodename[cname] = user;
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

    function createProject(address userAddress, string memory projectName, string memory projectMission) public payable {
        require(!projectNameTaken[projectName]);
        User storage user = users[userAddress];
        user.projectsInvolved++;

        Project storage project = allProjects.push();

        project.id = projectsCount;
        project.name = projectName;
        project.mission = projectMission;
        project.membersCount++;

        projectNameTaken[projectName] = true;

        usersProjects[userAddress].push(project);
        projectMembers[projectsCount].push(user);
        projectsCount++;
    }

    function modifyFeaturedProfiles(address[] memory userFeaturedAddress) public payable restricted {
      delete featuredProfiles;

      for (uint i = 0; i < 5; i++) {
        featuredProfiles.push(users[userFeaturedAddress[i]]);
      }
    }

    function modifyFeaturedProjects(uint[] memory projectIds) public payable restricted {
      delete featuredProjects;

      for (uint i = 0; i < 5; i++) {
        featuredProjects.push(allProjects[projectIds[i]]);
      }
    }

}