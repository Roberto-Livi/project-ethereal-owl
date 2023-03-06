import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Card, Modal, Segment } from "semantic-ui-react";

import CreateStory from "./CreateStory";

const Backlog = ({ projectId, codenames }) => {
  const scrumData = useSelector((state) => state.manageData.scrumData);
  const [selectedStory, setSelectedStory] = useState(null);

  const handleStoryClick = (story) => {
    setSelectedStory(story);
  };

  const handleCloseModal = () => {
    setSelectedStory(null);
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

      <Modal onClose={handleCloseModal} open={selectedStory !== null}>
        <Modal.Header>{selectedStory?.title}</Modal.Header>
        <Modal.Content>
          <Modal.Description>
            <p>{selectedStory?.description}</p>
            <p>{`Acceptance Criteria: ${selectedStory?.acceptanceCriteria}`}</p>
          </Modal.Description>
        </Modal.Content>
      </Modal>
    </div>
  );
};

export default Backlog;
