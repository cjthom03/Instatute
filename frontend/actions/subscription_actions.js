import * as SubscriptionApiUtils from '../util/subscription_api_util';

export const RECEIVE_SUBSCRIPTIONS = 'RECEIVE_SUBSCRIPTIONS';
export const RECEIVE_SINGLE_SUBSCRIPTION = 'RECEIVE_SINGLE_SUBSCRIPTION';

const receiveSubscriptions = subscriptions => ({
  type: RECEIVE_SUBSCRIPTIONS,
  subscriptions
});

const receiveSingleSubscription = subscription => ({
  type: RECEIVE_SINGLE_SUBSCRIPTION,
  subscription
});

export const fetchSubscriptions = () => dispatch => (
  SubscriptionApiUtils.fetchSubscriptions()
    .then(subscriptions => dispatch(receiveSubscriptions(subscriptions)))
);

export const postSubscription = newSubscription => dispatch => (
  SubscriptionApiUtils.postSubscription(newSubscription)
    .then(subscription => dispatch(receiveSingleSubscription(subscription)))
);
