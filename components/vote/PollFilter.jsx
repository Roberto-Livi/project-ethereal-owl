import React from "react";
import { Select } from "semantic-ui-react";

const PollFilter = ({ options, handleFilterChange }) => {
  return (
    <div className="poll-filter">
      <Select
        options={options}
        placeholder="Filter Polls"
        onChange={(e, { value }) => handleFilterChange(value)}
      />
    </div>
  );
};

export default PollFilter;
