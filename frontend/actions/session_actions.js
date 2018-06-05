import * as SessionApiUtils from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';
export const CLEAR_SESSION_ERRORS = 'CLEAR_SESSION_ERRORS';

const receiveCurrentUser = user => ({
  type: RECEIVE_CURRENT_USER,
  user
});

const logoutCurrentUser = () => ({
  type: LOGOUT_CURRENT_USER
});

const receiveSessionErrors = errors => ({
  type: RECEIVE_SESSION_ERRORS,
  errors
});

const clearSessionErrors = () => ({
  type: CLEAR_SESSION_ERRORS
});

export const signup = newUser => dispatch => (
  SessionApiUtils.signup(newUser)
    .then(
      user => dispatch(receiveCurrentUser(user)),
      err => dispatch(receiveSessionErrors(err.responseJSON))
    )
);

export const login = userCredentials => dispatch => (
  SessionApiUtils.login(userCredentials)
    .then(
      user => dispatch(receiveCurrentUser(user)),
      err => dispatch(receiveSessionErrors(err.responseJSON))
    )
);

export const logout = () => dispatch => (
  SessionApiUtils.logout()
    .then(
      user => dispatch(logoutCurrentUser()),
      err => dispatch(receiveSessionErrors(err.responseJSON))
    )
);
