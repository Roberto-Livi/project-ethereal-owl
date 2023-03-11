import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Button, Dimmer, Loader, Modal } from "semantic-ui-react";
import Column from "./Column";
import FilterBar from "./FilterBar";
import { updateScrumStory, closeSprint, getScrumboardByProjectId } from "../../helpers/mongodb/ScrumCallCenter";
import { updateBacklog, setScrumData } from "../../store/actions";

const ScrumBoard = ({ projectId, initialCards, codenames }) => {

  const dispatch = useDispatch();

  const [storyCards, setStoryCards] = useState(initialCards);
  const [selectedFilter, setSelectedFilter] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);

  const populateStoryCards = () => {
    setStoryCards(initialCards);
  };

  const handleFilterClick = (filter) => {
    setSelectedFilter(filter);
  };

  const handleDragStart = (e, index, status) => {
    console.log("Drag start:", index);
    e.dataTransfer.setData("text", index);
    e.dataTransfer.setData("status", status);
  };

  const handleDragOver = (e) => {
    console.log("Drag over");
    e.preventDefault();
  };

  const handleDrop = (e, status) => {
    e.preventDefault();
    const id = e.dataTransfer.getData("text/plain");
    const updatedStoryCards = storyCards.map((storyCard) => {
      if (storyCard.id === id) {
        updateStoryInMongo(storyCard, status);
        return { ...storyCard, status };
      } else {
        return storyCard;
      }
    });
    setStoryCards(updatedStoryCards);
  };

  const updateStoryInMongo = async (story, status) => {
    const response = await updateScrumStory(projectId, story.id, {
      ...story,
      status,
    });
    if (response) {
      dispatch(updateBacklog({ ...story, status }));
    }
  };

  const columns = [
    { title: "Ready", status: "Ready" },
    { title: "In Progress", status: "In Progress" },
    { title: "Review", status: "Review" },
    { title: "Done", status: "Done" },
  ];

  const handleReset = async () => {
    setShowModal(true);
  };

  const handleCloseModal = async () => {
    setShowModal(false);
  };

  const handleConfirmCloseModal = async () => {
    const storyIds = storyCards.map((card) => card.id);
    const success = await closeSprint(projectId, storyIds);
    if (success) {
      setStoryCards([]);
      setSelectedFilter(null);
      setShowModal(false);
      const updatedData = await getScrumboardByProjectId(projectId);
      dispatch(setScrumData(updatedData.data));
      // Show success message
    } else {
      // Show error message
      console.log("error");
    }
  };

  useEffect(() => {
    if (initialCards.length) {
      populateStoryCards();
    }
  }, [initialCards]);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 400);
  }, []);

  return (
    <>
      <Dimmer active={isLoading} inverted>
        <Loader content="Loading" size="massive" />
      </Dimmer>
      <div className="scrum-board-container">
        <FilterBar
          filters={[...codenames, "All"]}
          selectedFilter={selectedFilter}
          handleFilterClick={handleFilterClick}
        />
        <div className="scrum-board">
          {columns.map((column, index) => (
            <Column
              key={index}
              title={column.title}
              status={column.status}
              storyCards={storyCards}
              selectedFilter={selectedFilter}
              handleDragStart={handleDragStart}
              handleDragOver={handleDragOver}
              handleDrop={handleDrop}
            />
          ))}
        </div>
        <Button
          style={{ marginTop: "25px" }}
          color="violet"
          size="large"
          onClick={handleReset}
        >
          Close Sprint
        </Button>
        <Modal
          open={showModal}
          onClose={handleCloseModal}
          size="small"
          closeIcon
        >
          <Modal.Header>Are you sure you want to close sprint?</Modal.Header>
          <Modal.Content>
            <p>All stories in the sprint will be removed from the backlog.</p>
          </Modal.Content>
          <Modal.Actions>
            <Button color="red" onClick={handleCloseModal}>
              No, keep sprint open
            </Button>
            <Button color="green" onClick={handleConfirmCloseModal}>
              Yes, close the sprint
            </Button>
          </Modal.Actions>
        </Modal>
      </div>
    </>
  );
};

export default ScrumBoard;
