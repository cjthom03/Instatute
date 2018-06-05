import * as SessionApiUtils from '../util/session_api_util'

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';

const receiveCurrentUser = user => ({
  type: RECEIVE_CURRENT_USER,
  user
});

const logoutCurrentUser = () => ({
  type: LOGOUT_CURRENT_USER
});

const receiveErrors = errors => ({
  type: RECEIVE_ERRORS,
  errors
});

export const signup = newUser => dispatch => (
  SessionApiUtils.signup(newUser)
    .then(
      user => dispatch(receiveCurrentUser(user)),
      err => dispatch(receiveErrors(err.responseJSON))
    )
);

export const login = userCredentials => dispatch => (
  SessionApiUtils.login(userCredentials)
    .then(
      user => dispatch(receiveCurrentUser(user)),
      err => dispatch(receiveErrors(err.responseJSON))
    )
);

export const logout = () => dispatch => (
  SessionApiUtils.logout()
    .then(
      user => dispatch(logoutCurrentUser()),
      err => dispatch(receiveErrors(err.responseJSON))
    )
);
