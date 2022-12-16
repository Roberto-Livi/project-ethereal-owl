import web3 from "./web3";
import Users from "./build/Users.json";

const users = new web3.eth.Contract(
  Users.abi,
  "0xA0A499c01631bD394C1d0453F18004f4E680c2b9"
);

export default users;
