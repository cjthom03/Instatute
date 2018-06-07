import React from 'react';
import Rating from 'react-rating';
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
        <div className="course-item-ratings">
          <Rating
            emptySymbol="fas fa-star empty"
            fullSymbol="fas fa-star full"
            initialRating={Number(course.avg_rating)}
            readonly
            />
          <span className="star-rating-avg">{course.avg_rating}</span>
          <span className="star-rating-count">({course.rating_count})</span>
        </div>
      </div>
    </div>
    </Link>
  );
};

export default CourseIndexItem;
