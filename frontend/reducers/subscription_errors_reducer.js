import {
  RECEIVE_SUBSCRIPTION_ERRORS,
  CLEAR_SUBSCRIPTION_ERRORS,
  RECEIVE_SINGLE_SUBSCRIPTION
} from '../actions/subscription_actions';


export default (oldState = [], action) => {
  switch(action.type) {
    case RECEIVE_SUBSCRIPTION_ERRORS:
      return action.errors;
    case CLEAR_SUBSCRIPTION_ERRORS:
      return [];
    case RECEIVE_SINGLE_SUBSCRIPTION:
      return [];
    default:
      return oldState;
  }
};
