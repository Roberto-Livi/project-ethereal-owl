import users from "../../ethereum/users";
import web3 from "../../ethereum/web3";

export const getAccount = async () => {
  const accounts = await web3.eth.getAccounts();
  return accounts[0];
}

export const getUserData = async () => {
  const account = await web3.eth.getAccounts();
  const user = account.length && (await users.methods.users(account[0]).call());
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

export const getUsers = async () => {
  const allUsers = await users.methods.getAllUsers().call();
  return allUsers;
}