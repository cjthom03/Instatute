// import React from 'react';
import { connect } from 'react-redux';
import { coursesToArray } from '../../reducers/course_selectors';
import { fetchCourses } from '../../actions/course_actions';
import CourseIndex from './course_index';


const mapStateToProps = state => ({
  courses: coursesToArray(state.entities.courses)
  //Also, pass down the ui:loading slice of state
  //https://github.com/appacademy/curriculum/blob/master/react/projects/pokedex/pokedex_ii.md
});

const mapDispatchToProps = dispatch => ({
  fetchCourses: () => dispatch(fetchCourses())
});

export default connect(mapStateToProps, mapDispatchToProps)(CourseIndex);
