import lottery from "../../ethereum/lottery/lottery";
import web3 from "../../ethereum/web3";
import { transferTokens } from "../proj-token/proj-token";
import _ from "lodash";


export const enterLottery = async () => {
  let successfulResponse = false;

  try {
    const account = await web3.eth.getAccounts();
    // const resp = await transferTokens("0xdf36e9988f18416ad7d9dd38ffbfb2d07a2c7b67", 10);
    // if(resp) {
      await lottery.methods.enter().send({
        from: account[0],
      });
      successfulResponse = true;
    // }
  } catch(err) {
    console.log("Error: ", err.message);
  }

  return successfulResponse;
}

export const getPlayers = async () => {
  let successfulResponse = false;

  try {
    const players = await lottery.methods.getPlayers().call();
    const playersCount = await lottery.methods.playersCount().call();
    console.log(players);
    console.log(playersCount);
    successfulResponse = true;
  } catch(err) {
    console.log("Error: ", err.message);
  }

  return successfulResponse;
}