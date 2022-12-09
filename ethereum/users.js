import web3 from "./web3";
import Users from "./build/Users.json";

const users = new web3.eth.Contract(
  Users.abi,
  "0x4bD3C0DcffA88717b343C4CCC5E327F3B2e96A02"
);

export default users;
