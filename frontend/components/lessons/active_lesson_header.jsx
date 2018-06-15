import React from 'react';
import { Link } from 'react-router-dom';

const ActiveLessonHeader = ({ props }) => {

  return(
    <div className="active-lesson-header">
      <div className="active-lesson-upper-left">
        <button onClick={() => props.openSidebar()}>
          <i className="fas fa-list-ul"></i>
        </button>
        <span>
          {props.activeLesson.order_num}. {props.activeLesson.title}
        </span>
      </div>
      <div className="active-lesson-upper-right">
        <span>
          <Link to={`/courses/${props.course.id}`}>Back to course</Link>
        </span>
      </div>
    </div>
  );
};

export default ActiveLessonHeader;
