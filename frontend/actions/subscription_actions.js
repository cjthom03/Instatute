import * as SubscriptionApiUtils from '../util/subscription_api_util';

export const RECEIVE_SUBSCRIPTIONS = 'RECEIVE_SUBSCRIPTIONS';
export const RECEIVE_SINGLE_SUBSCRIPTION = 'RECEIVE_SINGLE_SUBSCRIPTION';
export const RECEIVE_SUBSCRIPTION_ERRORS = 'RECEIVE_SUBSCRIPTION_ERRORS';
export const CLEAR_SUBSCRIPTION_ERRORS = 'CLEAR_SUBSCRIPTION_ERRORS';

const receiveSubscriptions = subscriptions => ({
  type: RECEIVE_SUBSCRIPTIONS,
  subscriptions
});

const receiveSingleSubscription = subscription => ({
  type: RECEIVE_SINGLE_SUBSCRIPTION,
  subscription
});

export const receiveSubcriptionErrors = errors => ({
  type: RECEIVE_SUBSCRIPTION_ERRORS,
  errors
});

export const clearSubscriptionErrors = () => ({
  type: CLEAR_SUBSCRIPTION_ERRORS
});

export const fetchSubscriptions = () => dispatch => (
  SubscriptionApiUtils.fetchSubscriptions()
    .then(subscriptions => dispatch(receiveSubscriptions(subscriptions)))
);

export const postSubscription = newSubscription => dispatch => (
  SubscriptionApiUtils.postSubscription(newSubscription)
    .then(subscription => dispatch(receiveSingleSubscription(subscription)))
);
