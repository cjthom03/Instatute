import React from 'react';
import { Link } from 'react-router-dom';
import HeaderLogo from '../navbar/header_logo';


export default () => (
  <footer className="footer-main">
    <div className="footer-inner">
      <HeaderLogo />
      <nav className="footer-inner-right">
        <a href="https://github.com/cjthom03" alt="github">
          <i className="fab fa-github"></i>
        </a>
        <a href="https://www.linkedin.com/in/charlesjthomas/" alt="LinkedIn">
          <i className="fab fa-linkedin"></i>
        </a>
      </nav>
    </div>
  </footer>
);
