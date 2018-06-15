import React from 'react';
import ProgressBar from './progress_bar';
import SubscribeOrPlay from './subscribe_or_play';
import CourseRatings from './ratings';

const CourseShowHeader = ({ props }) => {
  let course = props.course;
  return(
    <div className="course-show-header-container">
      <div className="course-show-header-inner">
        <div className="course-show-header-inner-left">
          <img src={course.image_url} />
        </div>
        <div className="course-show-header-inner-right">
          <div className="course-show-header-inner-top">
            <div className="course-show-header-title">
              {course.title}
            </div>
            <SubscribeOrPlay
              props={props}
              />
            <CourseRatings
              className={"course-item-ratings"}
              course={course}
              />
          </div>
          <div className="course-show-header-inner-bottom">
            <ProgressBar
              subscribed={props.subscribed}
              completions={props.completions}
              course={props.course}
              />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseShowHeader;
