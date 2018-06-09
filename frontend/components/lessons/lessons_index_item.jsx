import React from 'react';

const LessonsIndexItem = ({ lesson }) => {
  return(
    <div className="lesson-item-container">
      <div className="lesson-item-container-left">
        <i className="far fa-play-circle"></i>
        {lesson.order_num}. {lesson.title}
      </div>
      <div className="lesson-item-container-right">
        {lesson.duration}
        <i className="far fa-circle"></i>
      </div>
    </div>
  );
};

export default LessonsIndexItem;
