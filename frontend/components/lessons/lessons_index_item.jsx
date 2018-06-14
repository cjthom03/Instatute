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

  changeCompletion(e) {
    if(this.props.userId && this.props.subscribed){
      e.stopPropagation();
      this.props.completions[this.props.lesson.id] ? (
        this.props.destroyCompletion(this.props.completions[this.props.lesson.id].id)
      ) : (
        this.props.postCompletion({
          user_id: this.props.userId,
          lesson_id: this.props.lesson.id
        })
      );
    }
  }


  render(){
    let lesson = this.props.lesson;
    let completions = this.props.completions;
    let completionIcon = completions[lesson.id] ? "fas fa-check-circle" : "far fa-circle";
    return(
      <a onClick={e => this.handleClick(e)}>
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
              <button onClick={e => this.changeCompletion(e)}>
                <i className={completionIcon}></i>
              </button>
            </div>
          </div>
      </a>
    );
  }
}

export default LessonsIndexItem;
