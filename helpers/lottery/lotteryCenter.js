import ponToken from "../../ethereum/ponToken/ponToken";
import web3 from "../../ethereum/web3";
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
  let playersCount;

  try {
    // const players = await ponToken.methods.getPlayers().call();
    playersCount = await ponToken.methods.playersCount().call();
    successfulResponse = true;
  } catch(err) {
    console.log("Error: ", err.message);
  }

  return { successfulResponse, playersCount };
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

export const getLotteryBalance = async () => {
  let balance = 0;

  try {
    balance = await ponToken.methods.lotteryBalance().call();
    balance = balance.substring(0, balance.length - 18);
  } catch(err) {
    console.log("Error: ", err.message);
  }

  return balance;
}

export const getLotteryManagerAddress = async () => {
  let successfulResponse = false;
  let address = "x1x1";

  try {
    address = await ponToken.methods.lotteryManager().call();
    successfulResponse = true;
  } catch(err) {
    console.log("Error: ", err.message);
  }

  return { successfulResponse, address };
}