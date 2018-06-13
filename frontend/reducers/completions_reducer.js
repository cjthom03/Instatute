import { RECEIVE_SINGLE_COURSE } from '../actions/course_actions';
import {
  RECEIVE_COMPLETION,
  REMOVE_COMPLETION
} from '../actions/completion_actions';
import merge from 'lodash/merge';

export default (oldState = {}, action) => {
  Object.freeze(oldState);
  switch(action.type) {
    case RECEIVE_SINGLE_COURSE:
      return merge({}, action.completions);
    case RECEIVE_COMPLETION:
      return merge({}, oldState,
        {[action.completion.lesson_id]: action.completion });
    case REMOVE_COMPLETION:
      let newState = merge({}, oldState);
      delete newState[action.completion.lesson_id];
      return newState;
    default:
      return oldState;
  }
};
