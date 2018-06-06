import React from 'react';
import { connect } from 'react-redux';
import { login } from '../../actions/session_actions';
import SessionForm from './session_form';
import { openModal, closeModal } from '../../actions/modal_actions';

const mapStateToProps = (state, ownProps) => ({
  errors: state.errors.session,
  formType: "Login"
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  processForm: user => dispatch(login(user)),
  closeModal: () => dispatch(closeModal()),
  otherForm: (
    <a onClick={() => dispatch(openModal('signup'))}>Sign up</a>
  )
});

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
