import users from "../../ethereum/users";
import web3 from "../../ethereum/web3";

export const getAccount = async () => {
  const accounts = await web3.eth.getAccounts();
  return accounts[0];
}

export const createUser = async (codename, profession, description) => {
  const accounts = await web3.eth.getAccounts();
  await users.methods
    .createUser(accounts[0], codename, profession, description)
    .send({
      from: accounts[0]
    });
}

export const getUsers = async () => {
  const allUsers = await users.methods.getAllUsers().call();
  return allUsers;
}