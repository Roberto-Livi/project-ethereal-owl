import React from "react";
import CreatePoll from "./CreatePoll";
import PollList from "./PollList";

const VoteManager = ({ projectId }) => {
  return (
    <div className="vote-dashboard-container">
      <div className="vote-dashboard-label">Vote Manager</div>
      <div className="vote-dashboard-value">
        <div className="create-poll-container">
          <CreatePoll projectId={projectId} />
        </div>
        <PollList />
      </div>
    </div>
  );
};

export default VoteManager;
