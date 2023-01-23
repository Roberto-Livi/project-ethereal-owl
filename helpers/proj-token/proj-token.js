import web3 from "../../ethereum/web3";
import ponToken from "../../ethereum/ponToken/ponToken";
import _ from "lodash";

export const approveTokenContract = async() => {
  let successfulResponse = false;

  try {
    const account = await web3.eth.getAccounts();
    const amount = 1000000 * 10 ** 18;
    const spenderAmount = web3.utils.toBN(amount);
    await ponToken.methods.approve(account[0], spenderAmount).send({
      from: account[0]
    });
    successfulResponse = true;
  } catch(err) {
    console.log("Error: ", err.message);
  }

  return successfulResponse;
}

export const getTokenBalance = async() => {
  let balance = 0;

  try {
    const account = await web3.eth.getAccounts();
    balance = await ponToken.methods.balanceOf(account[0]).call();
  } catch(err) {
    console.log("Error: ", err.message);
  }

  return balance;
}

export const getTotalSupply = async() => {
  const supply = await ponToken.methods.totalSupply().call();
  return supply;
}

export const sendTokenToUser = async(from, to, amount) => {
  let successfulResponse = false;

  try {
    const account = await web3.eth.getAccounts();
    const amountToGive = web3.utils.toBN(amount);
    await ponToken.methods.transferFrom(account[0], to, amountToGive).send({
      from: account[0]
    });
    successfulResponse = true;
  } catch(err) {
    console.log("Error: ", err.message);
  }

  return successfulResponse;
}