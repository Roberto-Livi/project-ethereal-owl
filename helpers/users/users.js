import users from "../../ethereum/users";
import web3 from "../../ethereum/web3";
import { getUniqueUser, getUniqueProject } from "./helpers";
import _ from "lodash";

export const getAccount = async () => {
  const accounts = await web3.eth.getAccounts();
  return accounts[0];
}

export const getUserData = async () => {
  let user;

  try {
    const account = await web3.eth.getAccounts();
    user = account.length && (await users.methods.users(account[0]).call());
  } catch(err) {
    console.log("Error: ", err.message);
    user = false;
  }

  return user;
}

export const getUserFromAllUsers = async (index) => {
  let user = null;

  try {
    user = await users.methods.allUsers(index).call();
  } catch(err) {
    console.log("Error: ", err.message);
  }

  return user;
}

export const getProjectFromAllProjects = async (index) => {
  let project = null;

  try {
    project = await users.methods.allProjects(index).call();
  } catch(err) {
    console.log("Error: ", err.message);
  }

  return project;
}

export const fetchUser = async(userAddress) => {
  let user = "";

  try {
    user = await users.methods.users(userAddress).call();
  } catch(err) {
    console.log("Error: ", err.message);
  }

  return user;
}

export const createUser = async (userInfo) => {
  let successfulResponse = false;
  let message = "";

  try {
    const usernameTaken = await users.methods.codenameTaken(userInfo.codename).call();
    if(usernameTaken) {
      message = "Codename has been taken";
      return { successfulResponse, message };
    } else {
      const accounts = await web3.eth.getAccounts();
      await users.methods
        .createUser(
          accounts[0],
          userInfo.codename,
          userInfo.profession,
          userInfo.description
        )
        .send({
          from: accounts[0],
        });
      successfulResponse = true;
    }
  } catch(err) {
    message = `Error: ${err.message}`;
  }

  return { successfulResponse, message };
}

export const getUsers = async (profession) => {
  const usersCount = await users.methods.usersCount().call();
  const maxResultsCount = 5;
  let userCollection = [];
  let userIds = [];

  const profNumberCount = await users.methods.profCount(profession).call();

  let resultsReqCount;

  if(profNumberCount){
    resultsReqCount = profNumberCount <= maxResultsCount ? profNumberCount : maxResultsCount;
  } else {
    resultsReqCount = 0;
  }

  for (let i = 0; i < resultsReqCount; i++) {
    await getUniqueUser(userCollection, userIds, usersCount, profession);
  }

  return userCollection;
}

export const getProjectsByField = async (field) => {
  const projectsCount = await users.methods.projectsCount().call();
  const maxResultsCount = 5;
  let projectCollection = [];
  let userIds = [];

  const fieldNumberCount = await users.methods.fieldCount(field).call();

  let resultsReqCount;

  if (fieldNumberCount) {
    resultsReqCount =
      fieldNumberCount <= maxResultsCount ? fieldNumberCount : maxResultsCount;
  } else {
    resultsReqCount = 0;
  }

  // Initialize a set to store unique user IDs
  const uniqueUserIds = new Set();

  // While the unique user IDs set is smaller than the results required, keep looking for projects
  while (
    uniqueUserIds.size < resultsReqCount &&
    userIds.length < projectsCount
  ) {
    // Generate a random index within the range of projects
    const randomIndex = Math.floor(Math.random() * projectsCount);

    // If the random index is already in the uniqueUserIds set, skip this iteration
    if (uniqueUserIds.has(randomIndex)) continue;

    // Add the random index to the uniqueUserIds set
    uniqueUserIds.add(randomIndex);

    // Get the project by index
    const project = await users.methods.allProjects(randomIndex).call();

    // Check if the project field matches the requested field
    if (project.field === field) {
      // Add the project to the projectCollection array
      projectCollection.push(project);
    }
  }

  return projectCollection;
};


export const getFiveUsers = async () => {
  let userCollection = [];

  try {
    const usersCount = await users.methods.usersCount().call();
    const maxResultsCount = 5;
    let userIds = [];

    let resultsReqCount;

    if (usersCount) {
      resultsReqCount =
        usersCount <= maxResultsCount ? usersCount : maxResultsCount;
    } else {
      resultsReqCount = 0;
    }

    for (let i = 0; i < resultsReqCount; i++) {
      await getUniqueUser(userCollection, userIds, usersCount);
    }
  } catch(err) {
    console.log("Error: ", err.message);
  }

  return userCollection;
}

export const getFiveProjects = async () => {
  let projectsCollection = [];

  try {
    const projectsCount = await users.methods.projectsCount().call();
    const maxResultsCount = 5;
    let projectIds = [];

    let resultsReqCount;

    if (projectsCount) {
      resultsReqCount =
        projectsCount <= maxResultsCount ? projectsCount : maxResultsCount;
    } else {
      resultsReqCount = 0;
    }

    for (let i = 0; i < resultsReqCount; i++) {
      await getUniqueProject(projectsCollection, projectIds, projectsCount);
    }
  } catch (err) {
    console.log("Error: ", err.message);
  }

  return projectsCollection;
};

export const getUserByCodename = async(codename) => {
  let cname = "";

  try {
    cname = await users.methods.getUserByCodename(codename).call();
  } catch(err) {
    console.log("Error: ", err.message);
  }

  return cname;
}

export const isAdmin = async(userAddress) => {
  const admin = await users.methods.manager().call();
  return _.isEqual(admin, userAddress);
}

export const submitFeaturedUsers = async(userAddressCollection) => {
  const accounts = await web3.eth.getAccounts();
  await users.methods.modifyFeaturedProfiles(userAddressCollection).send({
    from: accounts[0]
  });
}

export const getFeaturedUsers = async() => {
  let featuredCollection = [];

  try {
    for (let i = 0; i < 5; i++) {
      let userData = await users.methods.featuredProfiles(i).call();
      featuredCollection.push(userData);
    }
  } catch(err){
    console.log("Error: ", err.message);
  }

  return featuredCollection;
}

export const createProject = async(address, projectName, projectMission, field) => {
  let successfulResponse = false;

  try {
    const accounts = await web3.eth.getAccounts();
    await users.methods
      .createProject(address, projectName, projectMission, field)
      .send({
        from: accounts[0],
      });
    successfulResponse = true;
  } catch(err) {
    console.log("Error: ", err.message);
  }

  return successfulResponse;
}

export const getUsersProjects = async(address) => {
  const usersProjects = [];
  let counter = 0;

  try {
    const user = await users.methods.users(address).call();
    const projectsInvolved = user.projectsInvolved;
    while (usersProjects.length < projectsInvolved) {
      let project = await users.methods.usersProjects(address, counter).call();
      if (!_.isEmpty(project.name)) {
        project.projectElementId = counter;
        usersProjects.push(project);
      }
      counter++;
    }
  } catch(err) {
    console.log("Error: ", err.message);
    usersProjects = [];
  }

  return usersProjects;
}

export const getProjectElementId = async (userAddress, projectName) => {
  let elementId = null;
  let counter = 0;

  try {
    while(_.isNull(elementId)) {
      let project = await users.methods.usersProjects(userAddress, counter).call();
      if(_.isEqual(project.name, projectName)) {
        elementId = counter;
      }
      counter++;
    }
  } catch(err) {
    console.log("Error: ", err.message);
  }

  return elementId;
}

export const getProject = async(walletAddress, id) => {
  const project = await users.methods.allProjects(id).call();
  const members = [];
  const addresses = [];
  let memberCount = 0;

  while(members.length < project.membersCount) {
    let member = await users.methods.projectMembers(id, memberCount).call();
    if(!_.isEmpty(member.codename)) {
      members.push(member);
      addresses.push(member.userAddress);
    }
    memberCount++;
  }

  const pendingRequests = await getProjectPendingRequests(project);

  const projectData = {
    project,
    members,
    isMember: addresses.includes(walletAddress),
    requests: pendingRequests,
    loaded: true
  };

  return projectData;
}

export const getProjectPendingRequests = async(project) => {
  const pendingRequestsCount = project.pendingRequests;
  const results = [];
  let counter = 0;

  while(results.length < pendingRequestsCount) {
    let user = await users.methods.projectPendingRequests(project.id, counter).call();
    if(!_.isEqual(user.codename, "")){
      results.push({ user, requestId: counter });
    }
    counter++;
  }

  return results;
}

export const getPendingRequestsAfterJoinRequest = async(projectId) => {
  let successfulResponse = false;
  let updatedRequests;

  try {
    const project = await users.methods.allProjects(projectId).call();
    updatedRequests = await getProjectPendingRequests(project);
    successfulResponse = true;
  } catch(err) {
    console.log("Error: ", err.message);
  }

  return successfulResponse ? updatedRequests : successfulResponse;
}

export const makeJoinRequest = async(walletAddress, projectId) => {
  let successfulRequest = false;

  try {
    const accounts = await web3.eth.getAccounts();
    await users.methods
      .projectJoinRequest(walletAddress, projectId)
      .send({
        from: accounts[0],
      });
      successfulRequest = true;
  } catch(err) {
    console.log("Error: ", err.message);
  }

  return successfulRequest;
}

export const answerJoinRequest = async(userAddress, projectId, requestId, approved) => {
  let successfulRequest = false;

  try {
    const accounts = await web3.eth.getAccounts();
    await users.methods.answerJoinRequest(userAddress, projectId, requestId, approved).send({
      from: accounts[0]
    });
    successfulRequest = true;
  } catch(err) {
    console.log("Error: ", err.message);
  }

  return successfulRequest;
}

export const updateUserWithMongoNotificationId = async(mongoId) => {
  let successfulRequest = false;

  try {
    const accounts = await web3.eth.getAccounts();
    await users.methods.subscribeToNotifications(mongoId).send({
      from: accounts[0],
    });
    successfulRequest = true;
  } catch(err) {
    console.log("Error: ", err.message);
  }

  return successfulRequest;
}

export const getUsersRecruitRequests = async(userAddress, requestsCount) => {
  let requests = [];
  let counter = 0;

  try {
    while(requests.length < requestsCount) {
      let project = await users.methods
      .recruitPendingRequests(userAddress, counter).call();
      if(!_.isEmpty(project.name)) {
        requests.push({ project, requestId: counter });
      }
      counter++;
    }
  } catch(err) {
    console.log("Error: ", err.message);
  }

  return requests;
}

export const recruitUser = async(userAddress, projectId) => {
  let successfulRequest = false;

  try {
    const accounts = await web3.eth.getAccounts();
    await users.methods.recruitJoinRequest(userAddress, projectId).send({
      from: accounts[0]
    });
    successfulRequest = true;
  } catch(err) {
    console.log("Error: ", err.message);
  }

  return successfulRequest;
}

export const recruitUserResponse = async (userAddress, projectId, requestId, approved) => {
  let successfulRequest = false;

  try {
    const accounts = await web3.eth.getAccounts();
    await users.methods.answerRecruitRequest(userAddress, projectId, requestId, approved).send({
      from: accounts[0]
    });
    successfulRequest = true;
  } catch (err) {
    console.log("Error: ", err.message);
  }

  return successfulRequest;
}

export const removeUserFromProject = async (projectId, userAddress, projectElementId, userElementId) => {
  let successfulRequest = false;

  try {
    const accounts = await web3.eth.getAccounts();
    await users.methods.removeUserFromProject(projectId, userAddress, projectElementId, userElementId).send({
      from: accounts[0]
    });
    successfulRequest = true;
  } catch(err) {
    console.log("Error: ", err.message);
  }

  return successfulRequest;
}

export const getUserElementIdFromProjMembers = async (codename, projectId) => {
  let elementId = null;
  let counter = 0;

  try {
    while (_.isNull(elementId)) {
      let user = await users.methods
        .projectMembers(projectId, counter)
        .call();
      if (_.isEqual(user.codename, codename)) {
        elementId = counter;
      }
      counter++;
    }
  } catch (err) {
    console.log("Error: ", err.message);
  }

  return elementId;
}

export const retrieveProjectByName = async (projectName) => {
  let project = "";

  try {
    project = await users.methods.getProjectByName(projectName).call();
  } catch(err) {
    console.log("Error: ", err.message);
  }

  return project;
};