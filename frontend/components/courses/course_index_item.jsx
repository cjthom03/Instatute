import React from 'react';
import Rating from 'react-rating';


const CourseIndexItem = ({ course }) => {
  return(
    <div className="course-item-container">
      <div className="course-thumbnail-container">
        <img src={course.image_url} />
      </div>
      <div className="course-item-card">
        <h3>{course.title}</h3>
        <h4>{course.author}</h4>
        <div className="course-item-ratings">
          <Rating
            emptySymbol="fas fa-star empty"
            fullSymbol="fas fa-star full"
            initialRating={course.avg_rating}
            readonly
            />
          <span className="star-rating-avg">{course.avg_rating}</span>
          <span className="star-rating-count">({course.rating_count})</span>
        </div>
      </div>
    </div>
  );
};

export default CourseIndexItem;
