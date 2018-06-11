import {
  RECEIVE_SUBSCRIPTIONS,
  RECEIVE_SINGLE_SUBSCRIPTION
} from '../actions/subscription_actions';
import merge from 'lodash/merge';

export default (oldState = {}, action) => {
  Object.freeze(oldState);
  switch(action.type) {
    case RECEIVE_SUBSCRIPTIONS:
      return merge({}, action.subscriptions);
    case RECEIVE_SINGLE_SUBSCRIPTION:
      return merge({}, oldState, action.subscription);
    default:
      return oldState;
  }
};
