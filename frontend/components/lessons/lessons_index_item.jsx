import React from 'react';
import { Link } from 'react-router-dom';

const LessonsIndexItem = ({ lesson}) => {
  return(
    <Link to={`/courses/${lesson.course_id}/lessons/${lesson.id}`} >
      <div className="lesson-item-container">
        <div className="lesson-item-container-left">
          <i className="far fa-play-circle"></i>
          <span>{lesson.order_num}{`. `}</span>
          <div className="lesson-item-container-left-text">
            <span>{lesson.title}</span>
          </div>
        </div>
        <div className="lesson-item-container-right">
          <span>{lesson.duration}</span>
          <i className="far fa-circle"></i>
        </div>
      </div>
    </Link>
  );
};

export default LessonsIndexItem;
