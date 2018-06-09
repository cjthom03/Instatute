export const lessonsToArray = lessons => {
  return Object.keys(lessons).map(id => lessons[id]);
};
