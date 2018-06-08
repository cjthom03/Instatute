import {
  RECEIVE_COURSES,
  RECEIVE_SINGLE_COURSE,
  START_LOADING_COURSES,
  START_LOADING_SINGLE_COURSE } from '../actions/course_actions';


export default (oldState = false, action) => {
  switch(action.type){
    case RECEIVE_COURSES:
    case RECEIVE_SINGLE_COURSE:
      return false;

    case START_LOADING_COURSES:
    case START_LOADING_SINGLE_COURSE:
      return true;
      
    default:
      return oldState;
  }
};
