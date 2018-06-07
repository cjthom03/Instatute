
export const fetchCourses = () => (
  $.ajax({
    method: 'GET',
    url: `api/courses`
  })
);

export const fetchSingleCourse = courseId => (
  $.ajax({
    method: 'GET',
    url: `api/courses/${courseId}`
  })
);
