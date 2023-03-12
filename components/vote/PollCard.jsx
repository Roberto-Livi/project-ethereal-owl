import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Card, Button, Modal, Message } from "semantic-ui-react";
// import { deletePoll, voteOnPoll } from "../../helpers/mongodb/ScrumCallCenter";

const PollCard = ({ poll }) => {

  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showVoteModal, setShowVoteModal] = useState(false);
  const [voteSuccessMessage, setVoteSuccessMessage] = useState("");
  const [voteErrorMessage, setVoteErrorMessage] = useState("");

  const walletAddress = useSelector((state) => state.manageData.walletAddress);

  const handleDelete = async () => {
    console.log("handleDelete")
    // const response = await deletePoll(poll.id);
    // if (response) {
    //   setShowDeleteModal(false);
    // }
  };

  const handleVote = async (vote) => {
    const updatedPoll = {
      ...poll,
      voted: [...poll.voted, walletAddress],
      [`${vote}Count`]: poll[`${vote}Count`] + 1,
    };
    console.log("handleVote: ", vote)
    // const response = await voteOnPoll(poll.id, updatedPoll);
    // if (response) {
    //   setShowVoteModal(false);
    //   setVoteSuccessMessage("You have voted successfully");
    //   setVoteErrorMessage("");
    // } else {
    //   setShowVoteModal(false);
    //   setVoteSuccessMessage("");
    //   setVoteErrorMessage("Failed to register vote");
    // }
  };

  const isUserVoted = poll.voted.includes(walletAddress);

  return (
    <Card fluid className="poll-card" onClick={() => setShowVoteModal(true)}>
      <Card.Content>
        <div className="poll-card-header">
          <div className="poll-card-prompt">{poll.prompt}</div>
          {poll.closed && <div className="poll-card-closed-label">Closed</div>}
          {!poll.closed && (
            <div className="poll-card-delete-btn">
              <Button
                icon="trash alternate outline"
                basic
                color="red"
                onClick={(e) => {
                  e.stopPropagation();
                  setShowDeleteModal(true);
                }}
              />
            </div>
          )}
        </div>
        <Card.Content style={{ display: "flex", justifyContent: "center" }}>
          <Card.Meta className="poll-card-meta">
            <span className="poll-card-yes-count">{poll.yesCount}</span>
            <span className="poll-card-count-separator">/</span>
            <span className="poll-card-no-count">{poll.noCount}</span>
          </Card.Meta>
        </Card.Content>
        {isUserVoted && <Message positive>Voted Already</Message>}
      </Card.Content>

      {/* Delete Confirmation Modal */}
      <Modal open={showDeleteModal} onClose={() => setShowDeleteModal(false)}>
        <Modal.Header>Confirm Delete</Modal.Header>
        <Modal.Content>
          <p>Are you sure you want to delete this poll?</p>
        </Modal.Content>
        <Modal.Actions>
          <Button
            onClick={() => {
              setShowDeleteModal(false);
              setShowVoteModal(false);
            }}
          >
            Cancel
          </Button>
          <Button color="red" onClick={handleDelete}>
            Delete
          </Button>
        </Modal.Actions>
      </Modal>

      {/* Vote Confirmation Modal */}
      <Modal open={showVoteModal} onClose={() => setShowVoteModal(false)}>
        <Modal.Header>Vote on Poll</Modal.Header>
        <Modal.Content>
          {voteSuccessMessage && (
            <Message positive>{voteSuccessMessage}</Message>
          )}
          {voteErrorMessage && <Message negative>{voteErrorMessage}</Message>}
          {!isUserVoted && (
            <>
              <p>{poll.prompt}</p>
              <Button.Group>
                <Button onClick={() => handleVote("yes")}>Yes</Button>
                <Button.Or />
                <Button onClick={() => handleVote("no")}>No</Button>
              </Button.Group>
            </>
          )}
          {isUserVoted && <Message positive>Voted Already</Message>}
        </Modal.Content>
      </Modal>
    </Card>
  );
};

export default PollCard;