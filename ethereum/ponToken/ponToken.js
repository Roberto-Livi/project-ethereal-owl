import web3 from "../web3";
import ponTokenAbi from "./ponTokenAbi";

const ponToken = new web3.eth.Contract(ponTokenAbi, process.env.ponTokenAbi);

export default ponToken;
