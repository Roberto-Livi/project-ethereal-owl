import React from "react";
import CreatePoll from "./CreatePoll";


const VoteManager = ({ projectId }) => {
  return (
    <div>
      <h1>Vote Manager</h1>
      <CreatePoll projectId={projectId} />
    </div>
  )
}

export default VoteManager;