import hodgeUsers from "../../ethereum/hodgeusers";
import web3 from "../../ethereum/web3";

const getAccount = async () => {
  const accounts = await web3.eth.getAccounts();
  return accounts[0];
}

export const createUser = async () => {
  await hodgeUsers.methods
    .createUser(getAccount(), "Dante Adam", "Digital Artist", "test desc")
    .send({
      from: getAccount()
    });
}

export const getUsers = async () => {
  const users = await hodgeUsers.methods.getHodgemen().call();
  return users;
}

// codename: "Owen Black"
// ​​description: "Front end Developer"
// ​​hodgeAddress: "0x713135cb90b7f6dFb68d7fE5243a1E2bF0dDc844"
// ​id: "0"
// length: 5
// profession: "Software Engineer"