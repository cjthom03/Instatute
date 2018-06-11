
export const fetchCourses = (subscriptions = false) => (
  $.ajax({
    method: 'GET',
    url: `api/courses`,
    data: { subscriptions }
  })
);

export const fetchSingleCourse = courseId => (
  $.ajax({
    method: 'GET',
    url: `api/courses/${courseId}`
  })
);
