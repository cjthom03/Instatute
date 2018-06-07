import React from 'react';
import {
  Route,
  Switch,
  Redirect
  } from 'react-router-dom';

import Modal from './modal/modal';
import Header from './navbar/header';
import Footer from './footer/footer';

export default () => (
  <div>
    <Modal />
    <Header />
    <Switch>
      <Route exact path='/' render={() => (<main></main>)} />
      <Redirect to='/' />
    </Switch>
    <Footer />
  </div>
);
