import {
  RECEIVE_SESSION_ERRORS,
  RECEIVE_CURRENT_USER,
  CLEAR_SESSION_ERRORS
} from '../actions/session_actions';

const _nullSessionErrors = [];

export default (oldState = _nullSessionErrors, action) => {
  Object.freeze(oldState);
  switch(action.type) {
    case RECEIVE_SESSION_ERRORS:
      return action.errors;
    case RECEIVE_CURRENT_USER:
      return _nullSessionErrors;
    case CLEAR_SESSION_ERRORS:
      return _nullSessionErrors;
    default:
      return oldState;
  }
};
