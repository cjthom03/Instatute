import React from 'react';
import { Route, Link } from 'react-router-dom';

import SessionButtonsContainer from '../session/session_buttons_container';
import SearchContainer from '../search/search_container';

export default () => (
  <header className="header-main">
    <div className="header-inner">
      <nav className="header-inner-left">
          <Link className="header-logo-container" to="/">
          <i className="fas fa-graduation-cap"></i>
          <h1>Instatute</h1>
          </Link>
      </nav>
      <nav className="header-inner-center">
        <SearchContainer />
      </nav>
      <nav className="header-inner-right">
        <SessionButtonsContainer />
      </nav>
    </div>
  </header>
);
