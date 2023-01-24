import web3 from "../../ethereum/web3";

export const convertToBigNumber = async(amount) => {
  const num = await web3.utils.toBN(amount);
  return num;
}