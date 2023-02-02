import React, { useState, useEffect } from "react";
import { getLotteryWinner } from "../../helpers/lottery/lotteryCenter";
import _ from "lodash";


const LotteryWinner = () => {

  const [winner, setWinner] = useState("");
  const defaultWinner = "0x0000000000000000000000000000000000000000";

  const getWinner = async () => {
    const resp = await getLotteryWinner();
    if(resp.successfulResponse && !_.isEqual(resp.winner, defaultWinner)) {
      setWinner(resp.winner);
    }
  }

  useEffect(() => {
    getWinner();
  }, []);

  return (
    <div>
      {winner}
    </div>
  )
}

export default LotteryWinner;