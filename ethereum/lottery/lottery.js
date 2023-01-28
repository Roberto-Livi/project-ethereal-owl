import web3 from "../web3";
import Lottery from "./lottery-build/Lottery.json";

const lottery = new web3.eth.Contract(Lottery.abi, process.env.lotteryContract);

export default lottery;