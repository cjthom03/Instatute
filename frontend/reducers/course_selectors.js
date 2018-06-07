
export const coursesToArray = courses => {
  return Object.keys(courses).map(id => courses[id]);
};
