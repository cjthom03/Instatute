import React from 'react';

const LessonsIndexItem = ({ lesson }) => {
  debugger;
  return(
    <div>
      {lesson.order_num}
      {lesson.title}
      {lesson.duration}
    </div>
  );
};

export default LessonsIndexItem;
