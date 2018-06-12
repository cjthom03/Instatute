import React from 'react';
import { Link } from 'react-router-dom';

class LessonsIndexItem extends React.Component{

  handleClick(e) {
    let lesson = this.props.lesson;
    if(!this.props.loggedIn) {
      this.props.openModal("login");
    }
      else if(this.props.subscribed) {
      this.props.history.push(`/courses/${lesson.course_id}/lessons/${lesson.id}`);
    } else {
      this.props.receiveSubcriptionErrors(["Please subscribe to view lessons"]);
    }
  }

  render(){
    let lesson = this.props.lesson;
    return(
      <button onClick={e => this.handleClick(e)}>
          <div className="lesson-item-container">
            <div className="lesson-item-container-left">
              <i className="far fa-play-circle"></i>
              <span>{lesson.order_num}{`. `}</span>
              <div className="lesson-item-container-left-text">
                <span>{lesson.title}</span>
              </div>
            </div>
            <div className="lesson-item-container-right">
              <span>{lesson.duration}</span>
              <i className="far fa-circle"></i>
            </div>
          </div>
      </button>
    );
  }
}

export default LessonsIndexItem;
