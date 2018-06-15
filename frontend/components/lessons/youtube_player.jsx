import React from 'react';
import YouTube from 'react-youtube';

const YtPlayer = ({ props }) => {
  let ytId = props.activeLesson.video_id;
  const opts = {
    width: "640",
    height: "390",
    playerVars: {
      enablejsapi: 1,
      autoplay: 1,
      iv_load_policy: 3,
      rel: 0,
      showinfo: 0
    }
  };

  const handleCompletion = (e) => {
    if(!props.completions[props.activeLesson.id]) {
      let user_id = props.userId;
      let lesson_id = props.activeLesson.id;
      props.postCompletion({user_id, lesson_id});
    }
  };

  return (
    <div className="active-lesson-container">
      <div className="video-responsive">
        <YouTube
          videoId={ytId}
          opts={opts}
          onEnd={(e) => handleCompletion(e)}
          />
      </div>
    </div>
  );

};

export default YtPlayer;
