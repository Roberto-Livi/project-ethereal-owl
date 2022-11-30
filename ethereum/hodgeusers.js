import web3 from "./web3";
import HodgeUsers from "./build/HodgeUsers.json";

const instance = new web3.eth.Contract(
  HodgeUsers.abi,
  "0x2DB1fC2DCe286f9E788bF5338c4a0e02f5aAA9ac"
);

export default instance;
