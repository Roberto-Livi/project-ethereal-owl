import web3 from "./web3";
import Users from "./build/Users.json";


const users = new web3.eth.Contract(Users.abi, process.env.contractAbi);

export default users;
