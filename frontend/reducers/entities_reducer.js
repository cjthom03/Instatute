import { combineReducers } from 'redux';
import UsersReducer from './users_reducer';
import CourseReducer from './course_reducer';
import LessonsReducer from './lessons_reducer';
import SubscriptionsReducer from './subscriptions_reducer';
import CompletionsReducer from './completions_reducer';
import SearchReducer from './search_reducer';

export default combineReducers({
  users: UsersReducer,
  courses: CourseReducer,
  lessons: LessonsReducer,
  subscriptions: SubscriptionsReducer,
  completions: CompletionsReducer,
  searchResults: SearchReducer
});
