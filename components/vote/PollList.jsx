import React from "react";
import { useSelector } from "react-redux";
import PollCard from "./PollCard";
import { Card } from "semantic-ui-react";

const PollList = () => {

  const voteData = useSelector((state) => state.manageData.voteData);

  return (
    <Card.Group itemsPerRow={3}>
      {voteData.data.map((poll) => (
        <PollCard key={poll.id} poll={poll} />
      ))}
    </Card.Group>
  );
};

export default PollList;