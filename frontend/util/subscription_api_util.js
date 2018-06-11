export const fetchSubscriptions = () => (
  $.ajax({
    method: 'GET',
    url: 'api/subscriptions'
  })
);

export const postSubscription = subscription => (
  $.ajax({
    method: 'POST',
    url: 'api/subscriptions',
    data: { subscription }
  })
);
