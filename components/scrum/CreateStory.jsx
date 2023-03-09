import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Modal, Message } from "semantic-ui-react";
import StoryForm from "./StoryForm";
import { addToBacklog, getScrumboardByProjectId } from "../../helpers/mongodb/ScrumCallCenter";
import { v4 as uuidv4 } from "uuid";
import { setScrumData } from "../../store/actions";

const CreateStory = ({ projectId, codenames }) => {

  const dispatch = useDispatch();

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
      const scrumData = await getScrumboardByProjectId(projectId);
      dispatch(setScrumData(scrumData.data));
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
            initialValues={null}
          />
        </Modal.Content>
      </Modal>
    </div>
  );
};

export default CreateStory;
