import React from 'react';
import LessonsIndex from './lessons_index';
import { Link } from 'react-router-dom';
import Sidebar from './sidebar';

class ActiveLesson extends React.Component {
  constructor(props) {
    super(props);
    this.checkPreviousLesson = this.checkPreviousLesson.bind(this);
    this.checkNextLesson = this.checkNextLesson.bind(this);
  }

  componentDidMount() {
    this.props.fetchSingleCourse(this.props.match.params.courseId)
      .then(() => this.props.fetchSubscriptions()
        .then(
          () => this.validateLessonSubscription()),
        () => this.props.history.push('/'));
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.course.id != nextProps.match.params.courseId ||
    this.props.activeLesson.id != nextProps.match.params.lessonId) {
      this.props.fetchSingleCourse(nextProps.match.params.courseId)
        .then( () => this.props.fetchSubscriptions()
          .then(
            () => this.validateLessonSubscription()),
          () => this.props.history.push('/'));
    }
  }

  validateLessonSubscription() {
    if(!this.props.lessons[this.props.match.params.lessonId]) {
      this.props.history.push(`/courses/${this.props.course.id}`);
    } else if(!this.props.subscriptions[this.props.course.id]) {
      this.props.receiveSubcriptionErrors(["Please subscribe to view lessons"]);
      this.props.history.push(`/courses/${this.props.course.id}`);
    }
  }

  checkPreviousLesson() {
    let activeLesson = this.props.activeLesson;
    if(this.props.lessonOrder.indexOf(activeLesson.order_num - 1) >= 0){
      let courseId = this.props.course.id;
      let prevLessonId = this.getLessonId(activeLesson.order_num - 1);
      return(
        <div>
          <i className="fas fa-angle-double-left"></i>
          <span><Link to={`/courses/${courseId}/lessons/${prevLessonId}`}>Previous</Link></span>
        </div>);
    }
  }

  checkNextLesson() {
    let activeLesson = this.props.activeLesson;
    if(this.props.lessonOrder.indexOf(activeLesson.order_num + 1) >= 0){
      let courseId = this.props.course.id;
      let nextLessonId = this.getLessonId(activeLesson.order_num + 1);
    return(
      <div>
        <span><Link to={`/courses/${courseId}/lessons/${nextLessonId}`}>Next</Link></span>
        <i className="fas fa-angle-double-right"></i>
      </div>
    );
  }
}

  getLessonId(orderNum) {
    let result;
    let lessons = this.props.lessons;
    Object.keys(lessons).forEach(id =>{
      if(lessons[id].order_num === orderNum) result = id;
    });
    return result;
  }



  render(){
    let ytId = this.props.activeLesson.video_id;
      if(this.props.subscriptions[this.props.course.id]){
      return(
        <div>
          <Sidebar />
          <div className="active-lesson-header">
            <div className="active-lesson-upper-left">
              <button onClick={() => this.props.openSidebar()}><i className="fas fa-list-ul"></i></button>
              <span>
                {this.props.activeLesson.order_num}. {this.props.activeLesson.title}</span>
            </div>
            <div className="active-lesson-upper-right">
              <span><Link to={`/courses/${this.props.course.id}`}>Back to course</Link></span>
            </div>
          </div>
          <div className="active-lesson-container">
            <div className="video-responsive">
              <iframe id="player" type="text/html"
                width="640" height="390"
                src=
                {`https://www.youtube.com/embed/${ytId}?enablejsapi=1&autoplay=1&iv_load_policy=3&rel=0&showinfo=0`}
                frameBorder="0"
                allowFullScreen></iframe>
            </div>
          </div>
          <div className="active-lesson-footer">
            <div className="active-lesson-footer-left">
              {this.checkPreviousLesson()}
            </div>
            <div className="active-lesson-footer-right">
              {this.checkNextLesson()}
            </div>
          </div>
        </div>
      );
    } else {
      return(<div className="active-lesson-container"></div>);
    }
  }
}


export default ActiveLesson;
