import users from "../../ethereum/users";
import web3 from "../../ethereum/web3";

export const getAccount = async () => {
  const accounts = await web3.eth.getAccounts();
  console.log(accounts[0])
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

// codename: "Owen Black"
// ​​description: "Front end Developer"
// userAddress: "0x713135cb90b7f6dFb68d7fE5243a1E2bF0dDc844"
// ​id: "0"
// length: 5
// profession: "Software Engineer"