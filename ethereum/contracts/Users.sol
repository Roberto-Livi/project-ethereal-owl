// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

contract Users {

    struct User {
        uint id;
        address userAddress;
        string codename;
        string profession;
        string description;
        uint projectsInvolved;
        uint pendingRequestsCount;
        string mongoNotificationsId;
    }

    struct Project {
        uint id;
        string name;
        string mission;
        uint membersCount;
        uint pendingRequests;
    }

    address public manager;
    User[] public allUsers;
    Project[] public allProjects;
    User[] public featuredProfiles;
    Project[] public featuredProjects;
    mapping(address => User) public users;
    mapping(address => Project[]) public usersProjects;
    mapping(uint => User[]) public projectMembers;
    mapping(uint => User[]) public projectPendingRequests;
    mapping(address => Project[]) public recruitPendingRequests;
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
      user.pendingRequestsCount = 0;
      user.mongoNotificationsId = "0";

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

    function subscribeToNotifications(string memory mongoId) public payable {
      require(walletRegistered[msg.sender]);
      User storage u = users[msg.sender];
      u.mongoNotificationsId = mongoId;
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

    function projectJoinRequest(address userAddress, uint projectId) public payable {
      require(walletRegistered[userAddress]);
      User storage user = users[userAddress];
      Project storage project = allProjects[projectId];
      project.pendingRequests++;
      projectPendingRequests[projectId].push(user);
    }

    function recruitJoinRequest(address recruitAddress, uint projectId) public payable {
      require(walletRegistered[msg.sender]);
      User storage user = users[recruitAddress];
      Project storage project = allProjects[projectId];
      user.pendingRequestsCount++;
      allUsers[user.id] = user;
      recruitPendingRequests[recruitAddress].push(project);
    }

    function answerJoinRequest(address userAddress, uint projectId, uint requestId, bool approved) public payable {
      require(walletRegistered[userAddress]);
      Project storage project = allProjects[projectId];
      if(approved) {
        User storage user = users[userAddress];
        user.projectsInvolved++;
        usersProjects[userAddress].push(project);
        project.membersCount++;
        projectMembers[projectId].push(user);
      }
      project.pendingRequests--;
      delete projectPendingRequests[projectId][requestId];
    }

    function answerRecruitRequest(address recruitAddress, uint projectId, uint requestId, bool approved) public payable {
      require(walletRegistered[recruitAddress]);
      User storage user = users[recruitAddress];
      if(approved){
        Project storage project = allProjects[projectId];
        user.projectsInvolved++;
        usersProjects[recruitAddress].push(project);
        project.membersCount++;
        projectMembers[projectId].push(user);
      }
      user.pendingRequestsCount--;
      allUsers[user.id] = user;
      delete recruitPendingRequests[recruitAddress][requestId];
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