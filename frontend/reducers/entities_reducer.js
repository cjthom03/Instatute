import { combineReducers } from 'redux';
import UsersReducer from './users_reducer';
import CourseReducer from './course_reducer';
import LessonsReducer from './lessons_reducer';
import SubscriptionsReducer from './subscriptions_reducer';
import SearchReducer from './search_reducer';

export default combineReducers({
  users: UsersReducer,
  courses: CourseReducer,
  lessons: LessonsReducer,
  subscriptions: SubscriptionsReducer,
  searchResults: SearchReducer
});
