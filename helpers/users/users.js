import users from "../../ethereum/users";
import web3 from "../../ethereum/web3";
import { getUniqueUser } from "./helpers";
import _ from "lodash";

export const getAccount = async () => {
  const accounts = await web3.eth.getAccounts();
  return accounts[0];
}

export const getUserData = async () => {
  const account = await web3.eth.getAccounts();
  const user = account.length && (await users.methods.users(account[0]).call());
  return user;
}

export const getUserFromAllUsers = async (index) => {
  const user = await users.methods.allUsers(index).call();
  return user;
}

// export const getOtherUser = async (address) => {
//   const user = account.length && (await users.methods.users(address).call());
//   return user;
// };

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

  for(let i = 0; i < 5; i++){
    let userData = await users.methods.featuredProfiles(i).call();
    featuredCollection.push(userData);
  }

  return featuredCollection;
}