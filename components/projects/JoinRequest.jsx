import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Button, Message } from "semantic-ui-react";
import { addNotification } from "../../helpers/mongodb/NotificationCallCenter";
import { makeJoinRequest } from "../../helpers/users/users";


const JoinRequest = ({ projectId }) => {

  const [hideError, setHideError] = useState(true);
  const [transactionPending, setTransactionPending] = useState(false);

  const walletAddress = useSelector((state) => state.manageData.walletAddress);
  const userInfo = useSelector((state) => state.manageData.userInfo);

  const joinRequest = async() => {
    setTransactionPending(true);
    if(userInfo) {
      const resp = await makeJoinRequest(walletAddress, projectId)
      setHideError(true);
      // if(resp) {
      //   addNotification();
      // }
    } else {
      setHideError(false);
    }
    setTransactionPending(false);
  };

  return (
    <div>
      <Button loading={transactionPending} color="violet" onClick={joinRequest}>
        Request to Join
      </Button>
      <Message hidden={hideError} negative>
        <Message.Header>
          Unable to send request
        </Message.Header>
        <p>Please connect your wallet</p>
      </Message>
    </div>
  );
}

export default JoinRequest;