import users from "../../ethereum/users";
import web3 from "../../ethereum/web3";
import { getUniqueUser } from "./helpers";
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
  const user = await users.methods.allUsers(index).call();
  return user;
}

export const createUser = async (userInfo) => {
  const accounts = await web3.eth.getAccounts();
  await users.methods
    .createUser(accounts[0], userInfo.codename, userInfo.profession, userInfo.description)
    .send({
      from: accounts[0]
    });
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

export const getFiveUsers = async () => {
  const usersCount = await users.methods.usersCount().call();
  const maxResultsCount = 5;
  let userCollection = [];
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

  return userCollection;
}

export const getUserByCodename = async(codename) => {
  const user = await users.methods.getUserByCodename(codename).call();
  return user;
}

export const isAdmin = async(userAddress) => {
  const admin = await users.methods.manager().call();
  return _.isEqual(admin, userAddress);
}

export const submitFeaturedUsers = async(userAddressCollection) => {
  const accounts = await web3.eth.getAccounts();
  await users.methods.modifyFeaturedProfiles(userAddressCollection).send({
    from: accounts[0],
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
    featuredCollection = [];
  }

  return featuredCollection;
}

export const createProject = async(address, projectName, projectMission) => {
  const accounts = await web3.eth.getAccounts();
  await users.methods
    .createProject(address, projectName, projectMission)
    .send({
      from: accounts[0]
    });
}

export const getUsersProjects = async(address) => {
  const usersProjects = [];

  try {
    const user = await users.methods.users(address).call();
    const projectsInvolved = user.projectsInvolved;

    for (let i = 0; i < projectsInvolved; i++) {
      let project = await users.methods.usersProjects(address, i).call();
      usersProjects.push(project);
    }
  } catch(err) {
    usersProjects = [];
  }

  return usersProjects;
}

export const getProject = async(walletAddress, id) => {
  const project = await users.methods.allProjects(id).call();
  const members = [];
  const addresses = [];

  for(let i = 0; i < project.membersCount; i++) {
    let member = await users.methods.projectMembers(id, i).call();
    members.push(member);
    addresses.push(member.userAddress);
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

const getProjectPendingRequests = async(project) => {
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