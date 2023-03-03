import React from "react";


const FilterBar = ({ filters, selectedFilter, handleFilterClick }) => {
  return (
    <div className="filter-bar">
      {filters.map((filter, index) => (
        <div
          key={index}
          className={`filter ${filter === selectedFilter ? "active" : ""}`}
          onClick={() => handleFilterClick(filter)}
        >
          {filter}
        </div>
      ))}
    </div>
  );
};

export default FilterBar;
