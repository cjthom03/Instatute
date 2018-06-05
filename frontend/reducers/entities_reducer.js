import { combineReducers } from 'redux';
import UsersReducer from './users_reducer.js';

export default combineReducers({
  users: UsersReducer
});
