import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Button } from "semantic-ui-react";
import { pickWinner, getLotteryManagerAddress } from "../../helpers/lottery/lotteryCenter";
import _ from "lodash";


const PickWinner = () => {

  const [showButton, setShowButton] = useState(false);
  const [loading, setLoading] = useState(false);

  const walletAddress = useSelector((state) => state.manageData.walletAddress);

  const verifyAddress = async () => {
    const resp = await getLotteryManagerAddress();
    if(resp.successfulResponse && walletAddress) {
      setShowButton(_.isEqual(resp.address, walletAddress));
    }
  }

  const pickLotteryWinner = async () => {
    setLoading(true);
    await pickWinner();
    setLoading(false);
  }

  useEffect(() => {
    verifyAddress();
  }, [walletAddress]);

  return (
    <div>
      {
        showButton &&
        <Button loading={loading} style={{ marginTop: "20px"}} size="big" color={"violet"} onClick={pickLotteryWinner}>
          Pick Winner
        </Button>
      }
    </div>
  )
}

export default PickWinner;