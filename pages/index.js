import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import Layout from "../components/utilities/Layout";
import { getTokenBalance } from "../helpers/proj-token/proj-token";
import { Button } from "semantic-ui-react";
import { approveTokenContract } from "../helpers/proj-token/proj-token";
import { enterLottery, getLotteryWinner, getPlayers, pickWinner, getLotteryBalance } from "../helpers/lottery/lotteryCenter";
import { transferTokens } from "../helpers/proj-token/proj-token";
import DataDashboard from "../components/homepage/DataDashboard";
import DashboardProjects from "../components/homepage/DashboardProjects";


const IgnitionistIndex = () => {

  const walletAddress = useSelector((state) => state.manageData.walletAddress);

  const info = async() => {
    if(walletAddress) {
      const balance = await getTokenBalance(walletAddress);
      console.log(balance);
    }
  }

  const sendPon = async()  => {
    if(walletAddress) {
      // const balance = await getTokenBalance();
      // console.log(balance)
      // const resp = await pickWinner();
      // console.log(resp)
      // if(resp) {
        // const winner = await getLotteryWinner();
        // console.log(winner)
      // }
      // await getPlayers();
      await getLotteryBalance();
      // await enterLottery();
      // await transferTokens("0x042072566B98039Be7Ab44731592BC7EB966B9d1", 10000);
      // const amount = 99 * (10 ** 18);
      // await sendTokenToUser(
      //   "0x34da0BdC60FC88C2D4a114CBa10391f7d667690b",
      //   "0x042072566B98039Be7Ab44731592BC7EB966B9d1",
      //   amount
      // );
    }
  }

  useEffect(() => {
    info();
  }, [walletAddress]);

  return (
    <Layout>
      <DataDashboard />
      <DashboardProjects />
      Welcome Ignitionist!
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

export default IgnitionistIndex;