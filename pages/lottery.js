import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Layout from "../components/utilities/Layout";
import { Button, Segment, Statistic, Message, Dimmer, Loader } from "semantic-ui-react";
import { getLotteryBalance, getPlayers, enterLottery } from "../helpers/lottery/lotteryCenter";
import PickWinner from "../components/lottery/PickWinner";
import LotteryWinner from "../components/lottery/LotteryWinner";
import _ from "lodash";


const Lottery = () => {

  const [playersCount, setPlayersCount] = useState(0);
  const [lotteryBalance, setLotteryBalance] = useState(0);
  const [enterMessage, setEnterMessage] = useState({ hide: true, message: "", positive: false, negative: false });
  const [loading, setLoading] = useState(false);
  const [pageLoading, setPageLoading] = useState(true);

  const walletAddress = useSelector((state) => state.manageData.walletAddress);

  const getTicketToLottery = async () => {
    setLoading(true);
    if(walletAddress) {
      const entered = await enterLottery();
      if (entered) {
        setEnterMessage({
          hide: false,
          message: "You have entered successfully",
          positive: true,
          negative: false
        });
      } else {
        setEnterMessage({
          hide: false,
          message: "Error occurred when trying to enter",
          negative: true,
          positive: false,
        });
      }
    } else {
      setEnterMessage({
        hide: false,
        message: "Connect Wallet",
        negative: true,
        positive: false,
      });
    }

    setLoading(false);
    await getData();

    setTimeout(() => {
      setEnterMessage({
        hide: true,
        message: "",
        positive: false,
        negative: false,
      });
    }, 7000);
  }

  const getData = async () => {
    const resp = await getPlayers();
    if(resp.successfulResponse) {
      setPlayersCount(resp.playersCount);
    }
    const balance = await getLotteryBalance();
    setLotteryBalance(balance);
    setPageLoading(false);
  }

  useEffect(() => {
    console.log(lotteryBalance)
    getData();
  }, []);

  return (
    <Layout>
      <h1>Lottery</h1>
      <Dimmer active={pageLoading} inverted>
        <Loader size="massive">Loading...</Loader>
      </Dimmer>
      {!pageLoading && (
        <>
          <LotteryWinner />
          <Message
            hidden={enterMessage.hide}
            positive={enterMessage.positive}
            negative={enterMessage.negative}
          >
            <Message.Content style={{ textAlign: "center" }}>
              <Message.Header>{enterMessage.message}</Message.Header>
            </Message.Content>
          </Message>
          <Segment
            placeholder
            size="large"
            inverted
            style={{ textAlign: "center" }}
          >
            <Segment floated="left" compact color="teal" size="big" inverted>
              <h2 style={{ margin: "0px" }}>Participants</h2>
              <Statistic inverted>
                <Statistic.Value>{playersCount}</Statistic.Value>
              </Statistic>
            </Segment>
            <Segment compact color="teal" size="big" inverted>
              <h2 style={{ margin: "0px" }}>Prize Amount</h2>
              <Statistic inverted>
                <Statistic.Value>
                  {_.isEmpty(lotteryBalance) ? "0" : lotteryBalance}
                </Statistic.Value>
              </Statistic>
            </Segment>
          </Segment>
          <Segment style={{ textAlign: "center" }}>
            <Button
              loading={loading}
              onClick={getTicketToLottery}
              positive
              size="huge"
            >
              Enter Lottery
            </Button>
            <PickWinner />
          </Segment>
        </>
      )}
    </Layout>
  );
};

export default Lottery;
