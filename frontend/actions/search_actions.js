import * as SearchApiUtil from '../util/search_api_util';

export const RECEIVE_ALL_SEARCH_RESULTS = 'RECEIVE_ALL_SEARCH_RESULTS';
export const RECEIVE_DROPDOWN_SEARCH_RESULTS = 'RECEIVE_DROPDOWN_SEARCH_RESULTS';
export const CLEAR_SEARCH_RESULTS = 'CLEAR_SEARCH_RESULTS';

const receiveAllSearchResults = courses => ({
  type: RECEIVE_ALL_SEARCH_RESULTS,
  courses
});

const receiveDropdownSearchResults = searchResults => ({
  type: RECEIVE_DROPDOWN_SEARCH_RESULTS,
  searchResults
});

export const clearSearchResults = () => ({
  type: CLEAR_SEARCH_RESULTS
});

export const fetchAllSearchResults = path => dispatch => (
  SearchApiUtil.fetchSearchResults({ path })
    .then(courses => dispatch(receiveAllSearchResults(courses)))
);

export const fetchDropdownSearchResults = (query, limit = 10) => dispatch => (
  SearchApiUtil.fetchSearchResults({ query, limit })
    .then(results => dispatch(receiveDropdownSearchResults(results)))
);
