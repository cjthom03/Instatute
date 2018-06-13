import React from 'react';
import { Link } from 'react-router-dom';
import CourseRatings from '../courses/ratings';


const SearchResultsIndexItem = ({ course }) => {
  return(
    <div className="search-result-item-container">
      <div className="search-result-thumbnail-container">
        <Link to={`/courses/${course.id}`}>
          <img src={course.image_url} />
        </Link>
      </div>
      <div className="search-result-item-card">
        <div className="search-result-item-card-left">
          <div className="search-result-item-card-left-top">
            <Link to={`/courses/${course.id}`}>
              <div className="search-result-title">
                <h3>{course.title}</h3>
              </div>
            </ Link>
            <div className="search-result-author"><h4>{course.author}</h4></div>
            <div className="search-result-description"><p>{course.description}</p></div>
          </div>
        <div className="search-result-item-card-left-bottom">
          <div className="search-result-meta">
              <i className="fas fa-play-circle"></i>
              <span>{course.lesson_count} lessons</span>
              <i className="far fa-clock"></i>
              <span>{course.total_duration}</span>
            </div>
        </div>
      </div>
        <div className="search-result-item-card-right">
          <CourseRatings
            className={"course-item-ratings"}
            course={course}
          />
        </div>
      </div>
    </div>
  );
};

export default SearchResultsIndexItem;
