import web3 from "./web3";
import Users from "./build/Users.json";

const users = new web3.eth.Contract(
  Users.abi,
  "0xE486De1Ef8d9A56bcb80976a53213a24197FFB8B"
);

export default users;
