import web3 from "./web3";
import Users from "./build/Users.json";

const users = new web3.eth.Contract(
  Users.abi,
  "0xF4c1dfA3588832218a03A22C46DcB17028E30ad3"
);

export default users;
