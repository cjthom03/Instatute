export const lessonsToArray = lessons => {
  return Object.values(lessons).sort(
    (lesson1, lesson2) => lesson1.order_num > lesson2.order_num);
};

export const lessonOrderToArray = lessons => {
  return Object.keys(lessons).map(id => lessons[id].order_num);
};

export const nextLesson = (lessons, completions) => {
  lessons = lessonsToArray(lessons);

  let result = null;
  for (let i = 0; i < lessons.length; i++) {
    let lesson = lessons[i];
    if (!completions[lesson.id]) {
      result = lesson;
      break;
    }
  }

  return result;

};
