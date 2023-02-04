import web3 from "../../ethereum/web3";
import ponToken from "../../ethereum/ponToken/ponToken";
import _ from "lodash";

export const approveTokenContract = async() => {
  let successfulResponse = false;

  try {
    const account = await web3.eth.getAccounts();
    const bigIntAmount = BigInt(10000000 * (10 ** 18)).toString();
    const spenderAmount = await web3.utils.toBN(bigIntAmount);
    await ponToken.methods.approveTokenContract(account[0], spenderAmount).send({
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

  return balance / (10 ** 18);
}

export const getTotalSupply = async() => {
  const supply = await ponToken.methods.totalSupply().call();
  return supply;
}

export const transferTokens = async(to, amount) => {
  let successfulResponse = false;

  try {
    const bigIntAmount = BigInt(amount * (10 ** 18)).toString();
    const account = await web3.eth.getAccounts();
    const convertedAmount = await web3.utils.toBN(bigIntAmount);
    await ponToken.methods.transfer(to, convertedAmount).send({
      from: account[0]
    });
    successfulResponse = true;
  } catch(err) {
    console.log("Error: ", err.message);
  }

  return successfulResponse;
}

export const userApprovedTokenContract = async(address) => {
  let approved = false;

  try {
    approved = await ponToken.methods.contractApproved(address).call();
  } catch(err) {
    console.log("Error: ", err.message);
  }

  return approved;
}