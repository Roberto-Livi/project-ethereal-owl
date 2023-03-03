import React from "react";

const StoryCard = ({
  id,
  title,
  description,
  acceptanceCriteria,
  storyPoints,
  taskedTo,
  createdBy,
  index,
  handleDragStart,
}) => {
  const handleDrag = (e) => {
    handleDragStart(e, id);
  };

  return (
    <div className="story-card" draggable onDragStart={handleDrag}>
      <div className="story-card-header">
        <div className="story-card-title">{title}</div>
        <div className="story-card-points">{storyPoints}</div>
      </div>
      <div className="story-card-body">
        <div className="story-card-description">{description}</div>
        <div className="story-card-acceptance-criteria">
          {acceptanceCriteria}
        </div>
        <div className="story-card-footer">
          <div className="story-card-tasked-to">{taskedTo}</div>
          <div className="story-card-created-by">{createdBy}</div>
        </div>
      </div>
    </div>
  );
};

export default StoryCard;
