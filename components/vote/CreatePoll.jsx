import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Button, Modal, Form, Message, Dimmer, Loader } from "semantic-ui-react";
import { addVoteData } from "../../helpers/mongodb/VoteCallCenter";
import { v4 as uuidv4 } from "uuid";
import { setVoteData } from "../../store/actions";
import { getVoteDataByProjectId } from "../../helpers/mongodb/VoteCallCenter";

const CreatePoll = ({ projectId }) => {

  const dispatch = useDispatch();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [prompt, setPrompt] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async () => {
    const myUuid = uuidv4();
    const voteData = {
      id: myUuid,
      prompt,
      voted: [],
      yesCount: 0,
      noCount: 0,
      closed: false
    }
    setIsLoading(true);
    const response = await addVoteData(projectId, voteData);
    if (response) {
      const updatedDaten = await getVoteDataByProjectId(projectId);
      dispatch(setVoteData(updatedDaten.data));
      setPrompt("");
      setSuccessMessage("Created Successfully");
      setIsLoading(false);
    } else {
      setErrorMessage("Failed to Create Poll");
      setIsLoading(false);
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setPrompt("");
    setSuccessMessage("");
    setErrorMessage("");
  };

  return (
    <>
      <Button positive onClick={() => setIsModalOpen(true)}>Create a Poll</Button>
      <Modal open={isModalOpen} onClose={handleCloseModal}>
        <Modal.Header>Create a Poll</Modal.Header>
        {successMessage && <Message positive>{successMessage}</Message>}
        {errorMessage && <Message negative>{errorMessage}</Message>}
        <Modal.Content>
          <Form onSubmit={handleSubmit}>
            <Form.Input
              label="Prompt"
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              required
            />
            <Button type="submit" disabled={isLoading}>
              Submit
            </Button>
            {isLoading && (
              <Dimmer active inverted>
                <Loader>Loading</Loader>
              </Dimmer>
            )}
          </Form>
        </Modal.Content>
      </Modal>
    </>
  );
};

export default CreatePoll;
