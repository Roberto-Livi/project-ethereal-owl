import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import Layout from "../components/utilities/Layout";
import { getTokenBalance } from "../helpers/proj-token/proj-token";
import { Button } from "semantic-ui-react";
import { approveTokenContract } from "../helpers/proj-token/proj-token";
import { convertToBigNumber } from "../helpers/proj-token/helpers";


const ChaincrackerIndex = () => {

  const walletAddress = useSelector((state) => state.manageData.walletAddress);

  const info = async() => {
    if(walletAddress) {
      const balance = await getTokenBalance(walletAddress);
      console.log(convertToBigNumber(balance))
    }
  }

  const sendPon = async()  => {
    if(walletAddress) {
      // await approveTokenContract();
      const amount = 99 * (10 ** 18);
      await sendTokenToUser(
        "0x34da0BdC60FC88C2D4a114CBa10391f7d667690b",
        "0x042072566B98039Be7Ab44731592BC7EB966B9d1",
        amount
      );
    }
  }

  useEffect(() => {
    info();
  }, [walletAddress]);

  return (
    <Layout>
      Welcome to Chaincracker
      <Button primary onClick={sendPon}>
        Send Pon
      </Button>
    </Layout>
  )
}

// Chaincracker.getInitialProps = async () => {
//   // const address = await web3.eth.getAccounts();
//   // console.log(address)
//   return { stars: 2, address };
// };

export default ChaincrackerIndex;