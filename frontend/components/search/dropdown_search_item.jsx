import React from 'react';


const DropdownListItem = ({ searchResult }) => {
  return(
    <li className="dropdown-search-item-wrapper">
      <div className="dropdown-search-item-icon">
        <i className="fas fa-search"></i>
      </div>
      <div className="dropdown-search-item-title">
        {searchResult.title}
      </div>
    </li>
  );
};

export default DropdownListItem;
