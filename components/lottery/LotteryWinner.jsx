import React, { useState, useEffect } from "react";
import { getLotteryWinner } from "../../helpers/lottery/lotteryCenter";
import { Card, Icon } from "semantic-ui-react";
import _ from "lodash";

const LotteryWinner = () => {
  const [winner, setWinner] = useState("");
  const defaultWinner = "0x0000000000000000000000000000000000000000";

  const getWinner = async () => {
    const resp = await getLotteryWinner();
    if (resp.successfulResponse && !_.isEqual(resp.winner, defaultWinner)) {
      setWinner(resp.winner);
    }
  };

  useEffect(() => {
    getWinner();
  }, []);

  return (
    <Card fluid>
      <Card.Content textAlign="center">
        <Card.Header>Recent Lottery Winner</Card.Header>
        <Card.Description>
          {winner ? (
            <>
              <Icon name="user" />
              {winner}
            </>
          ) : (
            "No winner yet"
          )}
        </Card.Description>
      </Card.Content>
    </Card>
  );
};

export default LotteryWinner;
