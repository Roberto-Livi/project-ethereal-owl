import ponToken from "../../ethereum/ponToken/ponToken";
import web3 from "../../ethereum/web3";
import { transferTokens } from "../proj-token/proj-token";
import _ from "lodash";


export const enterLottery = async () => {
  let successfulResponse = false;

  try {
    const account = await web3.eth.getAccounts();
    const bigIntAmount = BigInt(20 * (10 ** 18)).toString();
    const convertedAmount = await web3.utils.toBN(bigIntAmount);
    await ponToken.methods.enter(convertedAmount).send({
      from: account[0]
    });
    successfulResponse = true;
  } catch(err) {
    console.log("Error: ", err.message);
  }

  return successfulResponse;
}

export const getPlayers = async () => {
  let successfulResponse = false;

  try {
    const players = await ponToken.methods.getPlayers().call();
    const playersCount = await ponToken.methods.playersCount().call();
    console.log(players)
    console.log(playersCount)
    successfulResponse = true;
  } catch(err) {
    console.log("Error: ", err.message);
  }

  return successfulResponse;
}

export const pickWinner = async () => {
  let successfulResponse = false;

  try {
    const account = await web3.eth.getAccounts();
    await ponToken.methods.pickWinner().send({
      from: account[0]
    });
    successfulResponse = true;
  } catch(err) {
    console.log("Error: ", err.message);
  }

  return successfulResponse;
}

export const getLotteryWinner = async () => {
  let successfulResponse = false;
  let winner;

  try {
    winner = await ponToken.methods.winner().call();
    successfulResponse = true;
  } catch(err) {
    console.log("Error: ", err.message);
  }

  return { successfulResponse, winner }
}