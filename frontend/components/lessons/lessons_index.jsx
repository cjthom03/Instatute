import React from 'react';
import { lessonsToArray } from '../../reducers/lesson_selectors';
import LessonsIndexItem from './lessons_index_item';

const LessonsIndex = props => {
  let lessons = lessonsToArray(props.lessons);
  return(
    <div className="lessons-index-container">
        {lessons.map( lesson =>
          <LessonsIndexItem
            key={lesson.id}
            lesson={lesson}
            />
        )}
    </div>
  );
};

export default LessonsIndex;
