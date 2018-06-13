import {
  RECEIVE_COURSES,
  START_LOADING_COURSES,
  START_LOADING_SINGLE_COURSE } from '../actions/course_actions';
import { RECEIVE_SUBSCRIPTIONS } from '../actions/subscription_actions';
import {
  RECEIVE_ALL_SEARCH_RESULTS,
  START_LOADING_SEARCH_RESULTS
} from '../actions/search_actions';

export default (oldState = false, action) => {
  switch(action.type){
    case RECEIVE_ALL_SEARCH_RESULTS:
    case RECEIVE_COURSES:
    case RECEIVE_SUBSCRIPTIONS:
      return false;

    case START_LOADING_COURSES:
    case START_LOADING_SINGLE_COURSE:
    case START_LOADING_SEARCH_RESULTS:
      return true;

    default:
      return oldState;
  }
};
