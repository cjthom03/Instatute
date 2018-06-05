import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';

//TEST START
  import {signup, login, logout} from './actions/session_actions';
//TEST END

document.addEventListener('DOMContentLoaded', () => {
  const rootEl = document.getElementById("root");
  const store = configureStore();


  //TEST START
    window.signup = signup;
    window.login = login;
    window.logout = logout;
    window.getState = store.getState;
    window.dispatch = store.dispatch;
  //TEST END

  ReactDOM.render(<h1>udemyclone INSTAtute</h1>, rootEl);
});
