import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Modal, Message } from "semantic-ui-react";
import StoryForm from "./StoryForm";
import { addToBacklog } from "../../helpers/mongodb/ScrumCallCenter";
import { v4 as uuidv4 } from "uuid";

const CreateStory = ({ projectId, codenames }) => {
  const [openModal, setOpenModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const userInfo = useSelector((state) => state.manageData.userInfo);

  const handleSubmit = async (story) => {
    setIsLoading(true);
    const myUuid = uuidv4();
    const response = await addToBacklog(projectId, {
      id: myUuid,
      ...story,
      createdBy: userInfo.codename,
    });
    setIsLoading(false);
    if (response) {
      setSuccessMessage("Created Story Successfully");
    } else {
      setErrorMessage("Failed to Create Story");
    }
  };

  const handleCloseModal = () => {
    setOpenModal(false);
    setSuccessMessage("");
    setErrorMessage("");
  };

  return (
    <div>
      <Modal
        onClose={handleCloseModal}
        onOpen={() => setOpenModal(true)}
        open={openModal}
        trigger={<button className="ui button primary">Create Story</button>}
      >
        <Modal.Header>Create Story</Modal.Header>
        {successMessage && <Message positive>{successMessage}</Message>}
        {errorMessage && <Message negative>{errorMessage}</Message>}
        <Modal.Content>
          <StoryForm
            codenames={codenames}
            handleSubmit={handleSubmit}
            isLoading={isLoading}
          />
        </Modal.Content>
        <Modal.Actions>
          <button className="ui button" onClick={handleCloseModal}>
            Close
          </button>
        </Modal.Actions>
      </Modal>
    </div>
  );
};

export default CreateStory;
