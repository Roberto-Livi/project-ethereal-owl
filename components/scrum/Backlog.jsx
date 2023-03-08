import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Card, Modal, Segment, Message } from "semantic-ui-react";
import CreateStory from "./CreateStory";
import StoryForm from "./StoryForm";
import { updateScrumStory } from "../../helpers/mongodb/ScrumCallCenter";
import { updateBacklog } from "../../store/actions";


const Backlog = ({ projectId, codenames }) => {

  const dispatch = useDispatch();

  const scrumData = useSelector((state) => state.manageData.scrumData);
  const [selectedStory, setSelectedStory] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");


  const handleStoryClick = (story) => {
    setSelectedStory(story);
  };

  const handleCloseModal = () => {
    setSelectedStory(null);
    setSuccessMessage("");
    setErrorMessage("");
  };

  const handleUpdateStory = async(updatedStory) => {
    setIsLoading(true);
    const response = await updateScrumStory(
      projectId,
      selectedStory.id,
      updatedStory
    );
    setIsLoading(false);
    if (response) {
      dispatch(updateBacklog(updatedStory));
      setSuccessMessage("Updated Story Successfully");
    } else {
      setErrorMessage("Failed to Update Story");
    }
  };


  return (
    <div>
      <Segment>
        <CreateStory projectId={projectId} codenames={codenames} />
      </Segment>

      <Card.Group itemsPerRow={3}>
        {scrumData.backlog.map((story) => (
          <Card fluid key={story.id} onClick={() => handleStoryClick(story)}>
            <Card.Content>
              <div className="story-card-header">
                <div className="story-card-title">{story.title}</div>
                <div className="story-card-points">{story.storyPoints}</div>
              </div>
              <Card.Meta className="story-card-tasked-to">{`Tasked To: ${story.taskedTo}`}</Card.Meta>
              <Card.Meta className="story-card-tasked-to">{`Sprint Status: ${story.sprintStatus}`}</Card.Meta>
            </Card.Content>
          </Card>
        ))}
      </Card.Group>

      <Modal open={selectedStory !== null} onClose={handleCloseModal}>
        <Modal.Header>{selectedStory?.title}</Modal.Header>
        {successMessage && <Message positive>{successMessage}</Message>}
        {errorMessage && <Message negative>{errorMessage}</Message>}
        <Modal.Content>
          <StoryForm
            codenames={codenames}
            initialValues={selectedStory}
            handleSubmit={handleUpdateStory}
            isLoading={isLoading}
          />
        </Modal.Content>
      </Modal>
    </div>
  );
};

export default Backlog;
