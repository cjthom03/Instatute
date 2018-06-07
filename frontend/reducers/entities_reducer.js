import { combineReducers } from 'redux';
import UsersReducer from './users_reducer';
import CourseReducer from './course_reducer';

export default combineReducers({
  users: UsersReducer,
  courses: CourseReducer
});
