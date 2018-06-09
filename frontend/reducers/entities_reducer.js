import { combineReducers } from 'redux';
import UsersReducer from './users_reducer';
import CourseReducer from './course_reducer';
import LessonsReducer from './lessons_reducer';

export default combineReducers({
  users: UsersReducer,
  courses: CourseReducer,
  lessons: LessonsReducer
});
