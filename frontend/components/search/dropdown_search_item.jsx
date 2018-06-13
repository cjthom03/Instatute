import React from 'react';


const DropdownListItem = ({ searchResult }) => {
  return(
    <li className="dropdown-search-item-wrapper">
      <div><i className="fas fa-search"></i></div>
      <div>{searchResult.title}</div>
    </li>
  );
};

export default DropdownListItem;
