import web3 from "./web3";
import Users from "./build/Users.json";

const users = new web3.eth.Contract(
  Users.abi,
  "0x2DB1fC2DCe286f9E788bF5338c4a0e02f5aAA9ac"
);

export default users;
