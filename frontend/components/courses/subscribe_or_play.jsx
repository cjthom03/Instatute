import React from 'react';


const SubscribeOrPlay = ({ props }) => {
  const subscribeUser = () => {
    if (!props.loggedIn) {
      props.openModal("login");
    } else {
      let user_id = props.userId;
      let course_id = props.course.id;
      props.postSubscription({user_id, course_id});
    }
  };

  if(!props.subscribed) {
    return(
      <button
        onClick={subscribeUser}
        className="btn btn-primary">
        Subscribe
      </button>
    );
  } else if (props.nextLesson) {
    let buttonText = !Object.keys(props.completions).length ? ("Start Course") : (`Continue to Lesson ${props.nextLesson.order_num}`);
    return(
      <button
        onClick={() => props.history.push(`/courses/${props.course.id}/lessons/${props.nextLesson.id}`)}
        className="btn btn-primary">
        {buttonText}
      </button>
    );
  } else {
    return(
      <div className="course-show-header-subscribed">
        <span className="course-show-header-text">Completed</span>
        <span className="fa-stack fa-1x">
          <i className="fas fa-circle fa-stack-1x"></i>
          <i className="fas fa-check-circle fa-stack-1x"></i>
        </span>
      </div>
    );
  }
};

export default SubscribeOrPlay;
