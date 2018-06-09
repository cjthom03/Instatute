import { RECEIVE_SINGLE_COURSE } from '../actions/course_actions';


export default (oldState = {}, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_SINGLE_COURSE:
      return action.lessons;
    default:
      return oldState;
  }
};
