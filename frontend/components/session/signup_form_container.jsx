import React from 'react';
import { connect } from 'react-redux';
import {
  login,
  signup,
  clearSessionErrors } from '../../actions/session_actions';
import SessionForm from './session_form';
import { openModal, closeModal } from '../../actions/modal_actions';

const mapStateToProps = (state, ownProps) => ({
  errors: state.errors.session,
  formType: "Sign Up"
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  processForm: user => dispatch(signup(user)),
  closeModal: () => dispatch(closeModal()),
  clearSessionErrors: () => dispatch(clearSessionErrors()),
  demoLogin: (demoUser) => dispatch(login(demoUser)),
  otherForm: (
    <a onClick={() => dispatch(openModal('login'))}>Login</a>
  )
});

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
