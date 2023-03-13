import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Card, Button, Modal, Message, Loader } from "semantic-ui-react";
import { updateVoteData, getVoteDataByProjectId, deletePoll } from "../../helpers/mongodb/VoteCallCenter";
import { setVoteData } from "../../store/actions";

const PollCard = ({ poll }) => {
  const dispatch = useDispatch();

  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showVoteModal, setShowVoteModal] = useState(false);
  const [voteSuccessMessage, setVoteSuccessMessage] = useState("");
  const [voteErrorMessage, setVoteErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const walletAddress = useSelector((state) => state.manageData.walletAddress);
  const voteData = useSelector((state) => state.manageData.voteData);

  const handleDelete = async () => {
    setLoading(true);
    const response = await deletePoll(voteData.projectId, poll.id);
    setLoading(false);
    if (response) {
      const updatedDaten = await getVoteDataByProjectId(voteData.projectId);
      dispatch(setVoteData(updatedDaten.data));
      setShowDeleteModal(false);
    }
  };

  const handleVote = async (vote) => {
    setLoading(true);
    const updatedPoll = {
      ...poll,
      voted: [...poll.voted, walletAddress],
      [`${vote}Count`]: poll[`${vote}Count`] + 1,
    };
    const response = await updateVoteData(voteData.projectId, updatedPoll);
    setLoading(false);
    if (response) {
      const updatedDaten = await getVoteDataByProjectId(voteData.projectId);
      dispatch(setVoteData(updatedDaten.data));
      setVoteSuccessMessage("You have voted successfully");
      setVoteErrorMessage("");
    } else {
      setShowVoteModal(false);
      setVoteSuccessMessage("");
      setVoteErrorMessage("Failed to register vote");
    }
  };

  const isUserVoted = poll.voted.includes(walletAddress);

  const openVoteModal = () => {
    if (!showDeleteModal) {
      setShowVoteModal(true);
    }
  };

  return (
    <Card fluid className="poll-card" onClick={openVoteModal}>
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
        {loading ? (
          <Loader active inline="centered" />
        ) : isUserVoted ? (
          <Message positive>Voted Already</Message>
        ) : (
          <Message warning>Pending Vote</Message>
        )}
      </Card.Content>

      {/* Delete Confirmation Modal */}
      <Modal open={showDeleteModal} onClose={() => setShowDeleteModal(false)}>
        <Modal.Header>Confirm Delete</Modal.Header>
        <Modal.Content>
          <p>Are you sure you want to delete this poll?</p>
        </Modal.Content>
        <Modal.Actions>
          <Button onClick={() => setShowDeleteModal(false)}>Cancel</Button>
          <Button color="red" onClick={handleDelete}>
            Delete
          </Button>
        </Modal.Actions>
      </Modal>

      {/* Vote Confirmation Modal */}
      <Modal open={showVoteModal} onClose={() => setShowVoteModal(false)}>
        <Modal.Header>Vote on Poll</Modal.Header>
        <Modal.Content>
          {/* {voteSuccessMessage && (
        <Message positive>{voteSuccessMessage}</Message>
      )} */}
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