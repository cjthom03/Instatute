import React from 'react';
import {
  Route,
  Switch,
  Redirect
  } from 'react-router-dom';

import Modal from './modal/modal';
import Header from './navbar/header';
import Footer from './footer/footer';

import CourseContainer from './courses/course_container';
import CourseShowContainer from './courses/course_show_container';

export default () => (
  <div>
    <Modal />
    <Header />
    <Switch>
      <Route path='/courses/:courseId' component={CourseShowContainer} />
      <Route exact path='/' component={CourseContainer} />
      <Redirect to='/' />
    </Switch>
    <Footer />
  </div>
);
