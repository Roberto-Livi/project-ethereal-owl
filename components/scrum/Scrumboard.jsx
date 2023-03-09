import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import Column from "./Column";
import FilterBar from "./FilterBar";
import { Button, Dimmer, Loader } from "semantic-ui-react";
import { updateScrumStory } from "../../helpers/mongodb/ScrumCallCenter";
import { updateBacklog } from "../../store/actions";


const ScrumBoard = ({ projectId, initialCards }) => {

  const dispatch = useDispatch();

  const [storyCards, setStoryCards] = useState(initialCards);
  const [selectedFilter, setSelectedFilter] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const filters = Array.from(
    new Set(initialCards.map((story) => story.taskedTo))
  );

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

  const updateStoryInMongo = async(story, status) => {
    const response = await updateScrumStory(projectId, story.id, { ...story, status });
      if(response){
        dispatch(updateBacklog({ ...story, status }));
      }
  };

  const columns = [
    { title: "Ready", status: "Ready" },
    { title: "In Progress", status: "In Progress" },
    { title: "Review", status: "Review" },
    { title: "Done", status: "Done" }
  ];

  const handleReset = () => {
    setStoryCards(initialCards);
    setSelectedFilter(null);
    console.log("Sprint Summary:");
    console.log("Total stories:", storyCards.length);
    console.log(
      "Stories completed:",
      storyCards.filter((story) => story.status === "Done").length
    );
    console.log(
      "Stories in progress:",
      storyCards.filter((story) => story.status === "In Progress")
        .length
    );
    console.log(
      "Stories in review:",
      storyCards.filter((story) => story.status === "Review").length
    );
    console.log(
      "Stories not started:",
      storyCards.filter((story) => story.status === "Ready").length
    );
  };

  useEffect(() => {
    if(initialCards.length) {
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
          filters={[...filters, "All"]}
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
      </div>
    </>
  );
};

export default ScrumBoard;
