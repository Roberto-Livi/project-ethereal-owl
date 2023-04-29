import web3 from "./web3";
import UsersProxy from "./buildUsersProxy/UsersProxy.json";

const users = new web3.eth.Contract(UsersProxy.abi, process.env.contractAbi);

export default users;
