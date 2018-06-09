import React from 'react';

const LessonsIndexItem = ({ lesson }) => {
  debugger;
  return(
    <div>
      {lesson.order_num}
      {lesson.title}
      {lesson.content_duration}
    </div>
  );
};

export default LessonsIndexItem;
