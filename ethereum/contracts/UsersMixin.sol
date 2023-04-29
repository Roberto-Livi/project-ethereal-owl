// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

import "./UsersStorage.sol";

contract UsersMixin is UsersStorage {
    constructor() {
        manager = msg.sender;
    }

    modifier restricted() {
        require(msg.sender == manager);
        _;
    }

    function transferEther(address payable recipient) external {
        require(msg.sender == manager, "Only the manager can transfer Ether.");
        recipient.transfer(address(this).balance);
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

    function createProject(address userAddress, string memory projectName, string memory projectMission, string memory field) public payable {
        require(!projectNameTaken[projectName]);
        User storage user = users[userAddress];
        user.projectsInvolved++;

        Project storage project = allProjects.push();

        project.id = projectsCount;
        project.name = projectName;
        project.mission = projectMission;
        project.field = field;
        project.membersCount++;

        projectNameTaken[projectName] = true;
        getProjectByName[projectName] = project;

        allUsers[user.id] = user;

        projectMembersLength[projectsCount]++;
        usersProjectsLength[userAddress]++;
        usersProjects[userAddress].push(project);
        projectMembers[projectsCount].push(user);
        fieldCount[field] += 1;
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
      User storage user = users[userAddress];
      if(approved) {
        user.projectsInvolved++;
        usersProjects[userAddress].push(project);
        project.membersCount++;
        projectMembers[projectId].push(user);
        usersProjectsLength[user.userAddress]++;
        projectMembersLength[projectId]++;
        allUsers[user.id] = user;
      }
      project.pendingRequests--;
      delete projectPendingRequests[projectId][requestId];
    }

    function answerRecruitRequest(address recruitAddress, uint projectId, uint requestId, bool approved) public payable {
      require(walletRegistered[recruitAddress]);
      User storage user = users[recruitAddress];
      Project storage project = allProjects[projectId];
      if(approved){
        user.projectsInvolved++;
        usersProjects[recruitAddress].push(project);
        project.membersCount++;
        projectMembers[projectId].push(user);
        usersProjectsLength[user.userAddress]++;
        projectMembersLength[projectId]++;
        allUsers[user.id] = user;
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

    function removeUserFromProject(uint projectId, address userAddress, uint projectElementId, uint userElementId) public payable {
      require(walletRegistered[msg.sender]);
      Project storage project = allProjects[projectId];
      User storage user = users[userAddress];

      user.projectsInvolved--;
      usersProjects[userAddress];
      usersProjectsLength[userAddress]--;
      allUsers[user.id] = user;

      project.membersCount--;
      projectMembersLength[projectId]--;

      delete usersProjects[userAddress][projectElementId];
      delete projectMembers[projectId][userElementId];
    }
}
