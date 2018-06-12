import React from 'react';
import { connect } from 'react-redux';
import { Redirect, Route, withRouter } from 'react-router-dom';
import { openModal } from '../actions/modal_actions';
import { fetchSubscriptions } from '../actions/subscription_actions';

const mapStateToProps = state => ({
  loggedIn: Boolean(state.session.id)
});

const mapDispatchToProps = dispatch => ({
  openModal: modal => dispatch(openModal(modal)),
  fetchSubscriptions: () => dispatch(fetchSubscriptions())
});

const Protected = ({ loggedIn, path, component: Component,
  openModal, computedMatch}) => {
  if (!loggedIn) openModal('login');
  let redirectPath = computedMatch.params.courseId ?
    (`/courses/${computedMatch.params.courseId}`) : (`/`);

  return(
    <Route
      path={path}
      render={props => (
        loggedIn ? <Component  {...props} /> :
        <Redirect to={redirectPath} />
      )}
    />
  );
};


export const ProtectedRoute = withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Protected)
);

// const Subscribed = ({loggedIn, path, component: Component,
// computedMatch, fetchSubscriptions}) => {
//   let redirectPath = computedMatch.params.courseId ?
//     (`/courses/${computedMatch.params.courseId}`) : (`/`);
//   if(!loggedIn) {
//     return (<Route
//       path={path}
//       render={() => <Redirect to={redirectPath} />}
//       />
//     );
//   } else {
//     return null;
//     fetchSubscriptions().then( () =>(
//       <Route
//         path={path}
//         render={props => <Component  {...props} />}
//       />)
//     );
//   }
// };
//
// export const SubscribedRoute = withRouter(
//   connect(mapStateToProps, mapDispatchToProps)(Subscribed)
// );
