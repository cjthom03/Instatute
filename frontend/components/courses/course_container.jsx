// import React from 'react';
import { connect } from 'react-redux';
import { coursesToArray } from '../../reducers/course_selectors';
import { fetchCourses } from '../../actions/course_actions';
import CourseIndex from './course_index';


const mapStateToProps = state => ({
  courses: coursesToArray(state.entities.courses)
});

const mapDispatchToProps = dispatch => ({
  fetchCourses: () => dispatch(fetchCourses())
});

export default connect(mapStateToProps, mapDispatchToProps)(CourseIndex);
