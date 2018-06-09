import React from 'react';
import { lessonsToArray } from '../../reducers/lesson_selectors';
import LessonsIndexItem from './lessons_index_item';

const LessonsIndex = props => {
  let lessons = lessonsToArray(props.lessons);
  return(
    <div className="lessons-main">
      <div className="lessons-index-container">
          <div className="lessons-index-header">All Lessons</div>
          {lessons.map( lesson =>
            <LessonsIndexItem
              key={lesson.id}
              lesson={lesson}
              />
          )}
      </div>
    </div>
  );
};

export default LessonsIndex;
