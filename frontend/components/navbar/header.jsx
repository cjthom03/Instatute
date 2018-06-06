import React from 'react';
import { Route, Link } from 'react-router-dom';

import SessionButtonsContainer from '../session/session_buttons_container';
import SearchContainer from '../search/search_container';
import HeaderLogo from './header_logo';

export default () => (
  <header className="header-main">
    <div className="header-inner">
      <HeaderLogo />
      <nav className="header-inner-center">
        <SearchContainer />
      </nav>
      <nav className="header-inner-right">
        <SessionButtonsContainer />
      </nav>
    </div>
  </header>
);
