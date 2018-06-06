import React from 'react';
import { Route } from 'react-router-dom';

import SessionButtonsContainer from './session/session_buttons_container';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import Modal from './modal/modal';

export default () => (
  <div>
    <Modal />
    <header>
      <h1>Instatute</h1>
      <SessionButtonsContainer />
    </header>
  </div>
);
