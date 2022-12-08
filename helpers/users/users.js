import users from "../../ethereum/users";
import web3 from "../../ethereum/web3";

export const getAccount = async () => {
  const accounts = await web3.eth.getAccounts();
  return accounts[0];
}

export const createUser = async () => {
  const accounts = await web3.eth.getAccounts();
  await users.methods
    .createUser(accounts[0], "Dante Adam", "Digital Artist", "test desc")
    .send({
      from: accounts[0]
    });
}

export const getUsers = async () => {
  const allUsers = await users.methods.getAllUsers().call();
  return allUsers;
}