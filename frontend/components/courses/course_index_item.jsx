import React from 'react';


const CourseIndexItem = ({ course }) => {
  return(
    <div className="course-item-container">
      <img src={course.image_url} />
      <h3>{course.title}</h3>
      <h4>{course.author}</h4>
      <div className="course-item-ratings">
        <span>{course.avg_rating}</span>
        <span>({course.rating_count})</span>
      </div>
    </div>
  );
};

export default CourseIndexItem;
