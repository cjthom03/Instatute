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
import ActiveLessonContainer from './lessons/active_lesson_container';

export default () => (
  <div>
    <Modal />

    <Switch>
      <Route path= '/courses/:courseId/lessons/:lessonId'/>
      <Header />
    </Switch>

    <Switch>
      <Route path='/courses/:courseId/lessons/:lessonId'
        component={ActiveLessonContainer} />
      <Route path='/courses/:courseId'
        component={CourseShowContainer} />
      <Route exact path='/'
        component={CourseContainer} />
      <Redirect to='/' />
    </Switch>

    <Switch>
      <Route path= '/courses/:courseId/lessons/:lessonId'/>
      <Footer />
    </Switch>

  </div>
);
