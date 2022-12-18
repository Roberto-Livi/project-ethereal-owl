import web3 from "./web3";
import Users from "./build/Users.json";

const users = new web3.eth.Contract(
  Users.abi,
  "0x1cC49D8AF1322725682aD6d5e5A07AdD5fa7a2e8"
);

export default users;
