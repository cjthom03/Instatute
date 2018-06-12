import {
  RECEIVE_DROPDOWN_SEARCH_RESULTS,
  CLEAR_SEARCH_RESULTS
} from '../actions/search_actions';
import merge from 'lodash/merge';

export default (oldState = {}, action) => {
  Object.freeze(oldState);
  switch(action.type) {
    case RECEIVE_DROPDOWN_SEARCH_RESULTS:
      return merge({}, action.searchResults);
    case CLEAR_SEARCH_RESULTS:
      return {};
    default:
      return oldState;
  }
};
