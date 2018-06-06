import React from 'react';
import { Route } from 'react-router-dom';

import SessionButtonsContainer from './session/session_buttons_container';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import SearchContainer from './search/search_container';
import Modal from './modal/modal';

export default () => (
  <div>
    <Modal />
    <header className="header-main">
      <div className="header-inner">
        <nav className="header-inner-left">
          <h1>Instatute</h1>
        </nav>
        <nav className="header-inner-center">
          <SearchContainer />
        </nav>
        <nav className="header-inner-right">
          <SessionButtonsContainer />
        </nav>
      </div>
    </header>

  </div>
);
