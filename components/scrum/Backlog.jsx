import React from "react";
import CreateStory from "./CreateStory";


const Backlog = ({ projectId, codenames }) => {
  return (
    <div>
      <h1>Backlog</h1>
      <CreateStory projectId={projectId} codenames={codenames} />
    </div>
  )
}

export default Backlog;