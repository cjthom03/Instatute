
export const searchResultsToArray = searchResults => {
  return Object.keys(searchResults).map(id => searchResults[id]);
};
