import React from 'react';
import CourseRatings from './ratings';
import { Link } from 'react-router-dom';


const CourseIndexItem = ({ course }) => {
  return(
    <Link to={`/courses/${course.id}`}>
    <div className="course-item-container">
      <div className="course-thumbnail-container">
        <img src={course.image_url} />
      </div>
      <div className="course-item-card">
        <h3>{course.title}</h3>
        <h4>{course.author}</h4>
        <CourseRatings
          className={"course-item-ratings"}
          course={course}
          />
      </div>
    </div>
    </Link>
  );
};

export default CourseIndexItem;
