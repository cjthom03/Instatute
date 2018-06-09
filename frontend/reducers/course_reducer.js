import {
  RECEIVE_COURSES,
  RECEIVE_SINGLE_COURSE
} from '../actions/course_actions';
import merge from 'lodash/merge';

export default (oldState = {}, action) => {
  Object.freeze(oldState);
  switch(action.type) {
    case RECEIVE_COURSES:
      return merge({}, action.courses);
    case RECEIVE_SINGLE_COURSE:
      return merge({}, oldState, action.course);
    default:
      return oldState;
  }
};
