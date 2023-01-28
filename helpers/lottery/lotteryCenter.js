import lottery from "../../ethereum/lottery/lottery";
import web3 from "../../ethereum/web3";
import _ from "lodash";


export const enterLottery = async () => {
  let successfulResponse = false;

  try {
    const account = await web3.eth.getAccounts();
    await lottery.methods.enter().send({
      from: account[0]
    });
    successfulResponse = true;
  } catch(err) {
    console.log("Error: ", err.message);
  }

  return successfulResponse;
}