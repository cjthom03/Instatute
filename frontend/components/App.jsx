import React from 'react';
import { Route, Link } from 'react-router-dom';

import Modal from './modal/modal';
import Header from './navbar/header';
import Footer from './footer/footer';

export default () => (
  <div>
    <Modal />
    <Header />
    <main></main>
    <Footer />
  </div>
);
