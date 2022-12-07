import web3 from "./web3";
import Users from "./build/Users.json";

const users = new web3.eth.Contract(
  Users.abi,
  "0x815e1f9b03F7B8E464D87400702A7a95De35E5C2"
);

export default users;
