import React from 'react';
import { Route, Link } from 'react-router-dom';

import Modal from './modal/modal';
import Header from './navbar/header';

export default () => (
  <div>
    <Modal />
    <Header />
  </div>
);
