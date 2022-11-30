import web3 from "./web3";
import HodgeUsers from "./build/HodgeUsers.json";

const hodgeUsers = new web3.eth.Contract(
  HodgeUsers.abi,
  "0x62D1DfC54c0c1E1c2bd0cDDCCA35f4d4A8a6086B"
);

export default hodgeUsers;
