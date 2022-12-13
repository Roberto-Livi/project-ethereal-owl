import web3 from "./web3";
import Users from "./build/Users.json";

const users = new web3.eth.Contract(
  Users.abi,
  "0x224E564DDDBC09F9B10D321a638555BfE7e5DEfC"
);

export default users;
