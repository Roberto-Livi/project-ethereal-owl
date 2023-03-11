import React, { useState } from "react";
import Select from "react-select";

const BacklogFilter = ({ codenames, handleFilterChange }) => {

  const [filter, setFilter] = useState({ value: "All", label: "All" });

  const options = [
    { value: "All", label: "All" },
    ...codenames.map((name) => ({
      value: name,
      label: name,
    }))
  ];

  const handleOnChange = (selectedOption) => {
    setFilter(selectedOption);
    handleFilterChange(selectedOption);
  };

  return (
    <div className="backlog-filter">
      <Select
        options={options}
        value={filter}
        onChange={handleOnChange}
        className="backlog-filter-select"
        theme={(theme) => ({
          ...theme,
          colors: {
            ...theme.colors,
            primary: "#40BFFF",
          },
        })}
      />
    </div>
  );
};

export default BacklogFilter;
