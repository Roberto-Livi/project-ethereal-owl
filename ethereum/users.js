import web3 from "./web3";
import Users from "./build/Users.json";

const users = new web3.eth.Contract(
  Users.abi,
  "0xF94AeD2F0d6339Fc53944a456758f0d620f46F48"
);

export default users;
