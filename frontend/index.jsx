import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';

//TEST START
  // import {
  //   fetchAllSearchResults,
  //   fetchDropdownSearchResults
  // } from './actions/search_actions';
  // import { fetchCourses } from './util/course_api_util';

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
    // window.fetchAllSearchResults = fetchAllSearchResults;
    // window.fetchDropdownSearchResults = fetchDropdownSearchResults;
    // window.fetchCourses = fetchCourses;
    window.getState = store.getState;
    window.dispatch = store.dispatch;
  //TEST END

  ReactDOM.render(<Root store={store} />, rootEl);
});
