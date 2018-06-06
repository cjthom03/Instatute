import React from 'react';

const SearchContainer = (props) => {
  return(
    <div className="search-input-div">
      <input
        className="search-input"
        type="text"
        placeholder="Search for Courses"
        />
      <i className="fas fa-search search-icon"></i>
    </div>
  );
};

export default SearchContainer;
