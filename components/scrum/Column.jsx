import React, { useState } from "react";
import StoryCard from "./StoryCard";

const Column = ({
  title,
  status,
  storyCards,
  selectedFilter,
  handleDragStart,
  handleDragOver,
  handleDrop,
}) => {
  let filteredStories = storyCards;

  if (selectedFilter) {
    filteredStories = storyCards.filter(
      (story) =>
        story.taskedTo === selectedFilter || "All" === selectedFilter
    );
  }

  const [isDraggingOver, setIsDraggingOver] = useState(false);

  const handleDragEnter = (e) => {
    e.preventDefault();
    setIsDraggingOver(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setIsDraggingOver(false);
  };

  console.log(storyCards)

  return (
    <div
      className="sb-column"
      onDragEnter={handleDragEnter}
      onDragLeave={handleDragLeave}
      onDragOver={handleDragOver}
      onDrop={(e) => handleDrop(e, status)}
      style={{ backgroundColor: isDraggingOver ? "#00BFFF" : "#fff" }}
    >
      <div className="sb-column-header">{title}</div>
      {filteredStories
        .filter((story) => story.status === status)
        .map((story, index) => (
          <StoryCard
            key={index}
            title={story.title}
            description={story.description}
            acceptanceCriteria={story.acceptanceCriteria}
            storyPoints={story.storyPoints}
            taskedTo={story.taskedTo}
            id={story.id}
            createdBy={story.createdBy}
            index={index}
            handleDragStart={handleDragStart}
          />
        ))}
    </div>
  );
};

export default Column;
