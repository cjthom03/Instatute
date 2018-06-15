import React from 'react';
import { Link } from 'react-router-dom';

const ActiveLessonFooter = ({ props }) => {

  const getLessonId = (orderNum) => {
    let result;
    Object.keys(props.lessons).forEach(id =>{
      if(props.lessons[id].order_num === orderNum) result = id;
    });
    return result;
  };

  const checkForLesson = (num, text) => {
    let prevIcon = num === -1  ? (<i className={`fas fa-angle-double-left`}></i>) : "";
    let nextIcon = num === 1 ? (<i className={`fas fa-angle-double-right`}></i>) : "";

    if(props.lessonOrder.indexOf(props.activeLesson.order_num + num) >= 0){
      let lessonId = getLessonId(props.activeLesson.order_num + num);
      return(
        <div>
          <Link to={`/courses/${props.course.id}/lessons/${lessonId}`}>
            {prevIcon}
            <span>{text}</span>
            {nextIcon}
          </Link>
        </div>);
    }
  };

  return(
    <div className="active-lesson-footer">
      <div className="active-lesson-footer-left">
        {checkForLesson(-1, "Previous")}
      </div>
      <div className="active-lesson-footer-right">
        {checkForLesson(1, "Next")}
      </div>
    </div>
  );
};

export default ActiveLessonFooter;
