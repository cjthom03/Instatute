import React from 'react';

const NoSearchResultsBanner = ({ query }) => {
  return(
    <div className="no-results-container">
      <div className="no-results-inner">
        <div className="no-results-inner-left">
          <div className="no-results-inner-left-top">
            Sorry, we couldn't find any results for "{query}"
          </div>
          <div className="no-results-inner-left-bottom">
            Try adjusting your search. Here are some ideas:
            <ul>
              <li>Make sure all words are spelled correctly.</li>
              <li>Try different search terms.</li>
              <li>Try more general search terms.</li>
            </ul>
          </div>
        </div>
        <div className="no-results-inner-right">
          <i className="fas fa-search"></i>
        </div>
      </div>
    </div>
  );
};

export default NoSearchResultsBanner;
