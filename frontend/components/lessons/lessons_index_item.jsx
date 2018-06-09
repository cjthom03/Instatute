import React from 'react';

const LessonsIndexItem = ({ lesson }) => {
  return(
    <div className="lesson-item-container">
      <div className="lesson-item-container-left">
        <i className="far fa-play-circle"></i>
        <span>{lesson.order_num}. {lesson.title}</span>
      </div>
      <div className="lesson-item-container-right">
        <span>{lesson.duration}</span>
        <i className="far fa-circle"></i>
      </div>
    </div>
  );
};

export default LessonsIndexItem;
