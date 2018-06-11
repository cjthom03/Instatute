import React from 'react';
import { connect } from 'react-redux';
import { Redirect, Route, withRouter } from 'react-router-dom';
import { openModal } from '../actions/modal_actions';

const mapStateToProps = state => ({
  loggedIn: Boolean(state.session.id)
});

const mapDispatchToProps = dispatch => ({
  openModal: modal => dispatch(openModal(modal))
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
