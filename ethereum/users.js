import web3 from "./web3";
import Users from "./build/Users.json";

const users = new web3.eth.Contract(
  Users.abi,
  "0xc03a46Fa9Aa61efc5C68FA59baBc6eB1Bc3005c0"
);

export default users;
