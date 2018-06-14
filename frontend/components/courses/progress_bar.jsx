import React from 'react';
import { Line } from 'rc-progress';

const ProgressBar = ({completionCount, lessonCount}) => {
  let completionPercent = (completionCount / lessonCount) * 100;
  return (
    <div className="course-show-header-progress">
      <strong>{completionCount}</strong> of <strong>{lessonCount}</strong> lessons complete
      <Line
        className="course-show-progress-bar"
        percent={completionPercent}
        strokeWidth="2"
        strokeColor="#ffffff"
        trailWidth="2"
        trailColor="#676e79"
        strokeLinecap="square" />
    </div>
  );
};

export default ProgressBar;
