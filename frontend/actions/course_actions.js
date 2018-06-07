import * as CourseApiUtils from '../util/course_api_util';

export const RECEIVE_COURSES = 'RECEIVE_COURSES';
export const RECEIVE_SINGLE_COURSE = 'RECEIVE_SINGLE_COURSE';


const receiveCourses = courses => ({
  type: RECEIVE_COURSES,
  courses
});

const receiveSingleCourse = course => ({
  type: RECEIVE_SINGLE_COURSE,
  course
});

export const fetchCourses = () => dispatch => (
  CourseApiUtils.fetchCourses()
    .then(courses => dispatch(receiveCourses(courses)))
);

export const fetchSingleCourse = courseId => dispatch => (
  CourseApiUtils.fetchSingleCourse(courseId)
    .then(course => dispatch(receiveSingleCourse(course)))
);
