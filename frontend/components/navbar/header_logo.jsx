import React from 'react';
import { Link } from 'react-router-dom';


export default () => (
  <nav className="header-inner-left">
      <Link className="header-logo-container" to="/">
        <i className="fas fa-graduation-cap"></i>
        <h1>Instatute</h1>
      </Link>
  </nav>
);
