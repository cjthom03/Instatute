export const lessonsToArray = lessons => {
  return Object.keys(lessons).map(id => lessons[id]);
};

export const lessonOrderToArray = lessons => {
  return Object.keys(lessons).map(id => lessons[id].order_num);
};
