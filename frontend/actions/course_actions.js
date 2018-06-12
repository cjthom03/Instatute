import * as CourseApiUtils from '../util/course_api_util';

export const RECEIVE_COURSES = 'RECEIVE_COURSES';
export const RECEIVE_SINGLE_COURSE = 'RECEIVE_SINGLE_COURSE';
export const START_LOADING_COURSES = 'START_LOADING_COURSES';
export const START_LOADING_SINGLE_COURSE = 'START_LOADING_SINGLE_COURSE';


const receiveCourses = courses => ({
  type: RECEIVE_COURSES,
  courses
});

const receiveSingleCourse = ({course, lessons}) => ({
  type: RECEIVE_SINGLE_COURSE,
  course,
  lessons
});

const startLoadingCourses = () => ({
  type: START_LOADING_COURSES
});

const startLoadingSingleCourse = () => ({
  type: START_LOADING_SINGLE_COURSE
});

export const fetchCourses = (options) => dispatch => {
  dispatch(startLoadingCourses());
  return (CourseApiUtils.fetchCourses(options)
    .then(courses => dispatch(receiveCourses(courses))
  ));
};

export const fetchSingleCourse = courseId => dispatch => {
  dispatch(startLoadingSingleCourse());
  return (CourseApiUtils.fetchSingleCourse(courseId)
    .then(payload => dispatch(receiveSingleCourse(payload))
  ));
};
