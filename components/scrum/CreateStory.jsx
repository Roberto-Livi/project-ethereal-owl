import React, { useState } from "react";
import { useSelector } from "react-redux";
import {
  Button,
  Modal,
  Form,
  Dropdown,
  Message,
  Loader,
} from "semantic-ui-react";
import { addToBacklog } from "../../helpers/mongodb/ScrumCallCenter";
import { v4 as uuidv4 } from "uuid";

const CreateStory = ({ projectId, codenames }) => {

  const [openModal, setOpenModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [formValues, setFormValues] = useState({
    title: "",
    description: "",
    acceptanceCriteria: "",
    storyPoints: "",
    taskedTo: "",
    status: "",
    sprintStatus: ""
  });

  const userInfo = useSelector((state) => state.manageData.userInfo);

  const handleInputChange = (event, { name, value }) => {
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {
    setIsLoading(true);
    const myUuid = uuidv4();
    const response = await addToBacklog(projectId, { id: myUuid, ...formValues, createdBy: userInfo.codename });
    setIsLoading(false);
    if (response) {
      setSuccessMessage("Created Story Successfully");
      setFormValues({
        title: "",
        description: "",
        acceptanceCriteria: "",
        storyPoints: "",
        taskedTo: "",
        status: "",
        sprintStatus: ""
      });
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
        trigger={<Button>Create Story</Button>}
      >
        <Modal.Header>Create Story</Modal.Header>
        {successMessage && <Message positive>{successMessage}</Message>}
        {errorMessage && <Message negative>{errorMessage}</Message>}
        <Modal.Content>
          <Modal.Description>
            <Form onSubmit={handleSubmit}>
              <Form.Input
                label="Title"
                name="title"
                value={formValues.title}
                onChange={handleInputChange}
              />
              <Form.TextArea
                label="Description"
                name="description"
                value={formValues.description}
                onChange={handleInputChange}
              />
              <Form.TextArea
                label="Acceptance Criteria"
                name="acceptanceCriteria"
                value={formValues.acceptanceCriteria}
                onChange={handleInputChange}
              />
              <Form.Group inline>
                <Form.Dropdown
                  label="Story Points"
                  name="storyPoints"
                  options={[
                    { key: "1", value: "1", text: "1" },
                    { key: "2", value: "2", text: "2" },
                    { key: "3", value: "3", text: "3" },
                    { key: "5", value: "5", text: "5" },
                    { key: "8", value: "8", text: "8" },
                    { key: "13", value: "13", text: "13" },
                  ]}
                  selection
                  value={formValues.storyPoints}
                  onChange={handleInputChange}
                />
                <Form.Dropdown
                  label="Tasked To"
                  name="taskedTo"
                  options={codenames.map((codename) => ({
                    key: codename,
                    value: codename,
                    text: codename,
                  }))}
                  selection
                  value={formValues.taskedTo}
                  onChange={handleInputChange}
                />
                <Form.Dropdown
                  label="Status"
                  name="status"
                  options={[
                    { key: "ready", value: "ready", text: "Ready" },
                    {
                      key: "in progress",
                      value: "in progress",
                      text: "In Progress",
                    },
                    { key: "review", value: "review", text: "Review" },
                    { key: "done", value: "done", text: "Done" },
                  ]}
                  selection
                  value={formValues.status}
                  onChange={handleInputChange}
                />
              </Form.Group>
              <Form.Dropdown
                label="Sprint Status"
                name="sprintStatus"
                options={[
                  { key: "next", value: "next", text: "Next" },
                  {
                    key: "current sprint",
                    value: "current sprint",
                    text: "Current Sprint",
                  },
                  { key: "backlog", value: "backlog", text: "Backlog" },
                ]}
                selection
                value={formValues.sprintStatus}
                onChange={handleInputChange}
              />
              <Button type="submit" primary>
                Submit
              </Button>
              {isLoading && <Loader active inline="centered" />}
            </Form>
          </Modal.Description>
        </Modal.Content>
        <Modal.Actions>
          <Button color="black" onClick={handleCloseModal}>
            Close
          </Button>
        </Modal.Actions>
      </Modal>
    </div>
  );
};

export default CreateStory;
