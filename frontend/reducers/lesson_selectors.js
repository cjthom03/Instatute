export const lessonsToArray = lessons => {
  return Object.values(lessons).sort(
    (lesson1, lesson2) => lesson1.order_num > lesson2.order_num);
};

export const lessonOrderToArray = lessons => {
  return Object.keys(lessons).map(id => lessons[id].order_num);
};
