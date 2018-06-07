import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';

//TEST START
  import {fetchCourses, fetchSingleCourse} from './actions/course_actions';

//TEST END

document.addEventListener('DOMContentLoaded', () => {
  const rootEl = document.getElementById("root");
  let store;

  if(window.currentUser) {
    const preloadedState = {
      entities: {
        users: { [window.currentUser.id]: window.currentUser }
        },
        session: { id: window.currentUser.id }
      };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }


  //TEST START
    window.fetchCourses = fetchCourses;
    window.fetchSingleCourse = fetchSingleCourse;
    window.getState = store.getState;
    window.dispatch = store.dispatch;
  //TEST END

  ReactDOM.render(<Root store={store} />, rootEl);
});
