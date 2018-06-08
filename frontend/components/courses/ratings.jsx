import React from 'react';
import Rating from 'react-rating';

export default ({ course, className }) => {
  return (
    <div className={className}>
      <Rating
        emptySymbol="fas fa-star empty"
        fullSymbol="fas fa-star full"
        initialRating={Number(course.avg_rating)}
        readonly
        />
      <span className="star-rating-avg">{course.avg_rating}</span>
      <span className="star-rating-count">({course.rating_count})</span>
    </div>
  );
};
