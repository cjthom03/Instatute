import React from 'react';
import ReactDOM from 'react-dom';

//TEST START
  import {signup, login, logout} from './util/session_api_util';
//TEST END

document.addEventListener('DOMContentLoaded', () => {
  const rootEl = document.getElementById("root");


  //TEST START
    window.signup = signup;
    window.login = login;
    window.logout = logout;
  //TEST END

  ReactDOM.render(<h1>udemyclone INSTAtute</h1>, rootEl);
});
