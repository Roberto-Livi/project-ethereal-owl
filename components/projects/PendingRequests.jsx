import React, { useState } from "react";
import { answerJoinRequest } from "../../helpers/users/users";
import { Button } from "semantic-ui-react";


const PendingRequests = ({ requests, projectId }) => {

  const [transactionPending, setTransactionPending] = useState(false);

  const answerRequest = async(userAddress, requestId, approved) => {
    setTransactionPending(true);
    await answerJoinRequest(userAddress, projectId, requestId, approved);
    setTransactionPending(false);
  }

  return (
    <div>
      <h2>Pending Requests</h2>
      {requests.map((request, index) => (
        <div key={index}>
          <h3>{request.user.codename}</h3>
          <Button
            disabled={transactionPending}
            color="violet"
            onClick={() =>
              answerRequest(request.user.userAddress, request.requestId, true)
            }
          >
            Approve
          </Button>
          <Button
            disabled={transactionPending}
            color="red"
            onClick={() =>
              answerRequest(request.user.userAddress, request.requestId, false)
            }
          >
            Reject
          </Button>
        </div>
      ))}
    </div>
  );
}

export default PendingRequests;