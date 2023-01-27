import React from "react";
import { useSelector } from "react-redux";
import Layout from "../components/utilities/Layout";
import { Button, Container, Segment, Statistic, Grid, Card } from "semantic-ui-react";


const Lottery = () => {

  const walletAddress = useSelector((state) => state.manageData.walletAddress);

  const enterLottery = () => {
    console.log("enter lottery");
  }

  return (
    <Layout>
      <h1>Lottery</h1>
      <Segment
        placeholder
        size="large"
        inverted
        style={{ textAlign: "center" }}
      >
        <Segment floated="left" compact color="teal" size="big" inverted>
          <h2 style={{ margin: "0px" }}>Participants</h2>
          <Statistic inverted>
            <Statistic.Value>5,550</Statistic.Value>
          </Statistic>
        </Segment>
        <Segment compact color="teal" size="big" inverted>
          <h2 style={{ margin: "0px" }}>Prize Amount</h2>
          <Statistic inverted>
            <Statistic.Value>5,550</Statistic.Value>
          </Statistic>
        </Segment>
      </Segment>
      <Segment style={{ textAlign: "center" }}>
        <Button onClick={enterLottery} positive size="huge">
          Enter Lottery
        </Button>
      </Segment>
    </Layout>
  );
};

export default Lottery;
