import React from 'react';
import LessonsIndex from './lessons_index';
import { Link } from 'react-router-dom';
import Sidebar from './sidebar';
import YouTube from 'react-youtube';


class ActiveLesson extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchSingleCourse(this.props.match.params.courseId)
      .then( () => this.props.fetchSubscriptions()
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
    }
    else if(!this.props.subscriptions[this.props.course.id]) {
      this.props.receiveSubcriptionErrors(["Please subscribe to view lessons"]);
      this.props.history.push(`/courses/${this.props.course.id}`);
    }
  }

  checkForLesson(num, text) {
    let activeLesson = this.props.activeLesson;
    let prevIcon = num === -1  ? (<i className={`fas fa-angle-double-left`}></i>) : "";
    let nextIcon = num === 1 ? (<i className={`fas fa-angle-double-right`}></i>) : "";

    if(this.props.lessonOrder.indexOf(activeLesson.order_num + num) >= 0){
      let courseId = this.props.course.id;
      let lessonId = this.getLessonId(activeLesson.order_num + num);
      return(
        <div>
          <Link to={`/courses/${courseId}/lessons/${lessonId}`}>
            {prevIcon}
            <span>{text}</span>
            {nextIcon}
          </Link>
        </div>);
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

  handleCompletion(e) {
    if(!this.props.completions[this.props.activeLesson.id]) {
      let user_id = this.props.userId;
      let lesson_id = this.props.activeLesson.id;
      this.props.postCompletion({user_id, lesson_id});
    }

  }

  render(){
    let ytId = this.props.activeLesson.video_id;
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

      if(this.props.subscriptions[this.props.course.id]){
      return(
        <div>
          <Sidebar />
          <div className="active-lesson-header">
            <div className="active-lesson-upper-left">
              <button onClick={() => this.props.openSidebar()}>
                <i className="fas fa-list-ul"></i>
              </button>
              <span>
                {this.props.activeLesson.order_num}. {this.props.activeLesson.title}</span>
            </div>
            <div className="active-lesson-upper-right">
              <span>
                <Link to={`/courses/${this.props.course.id}`}>Back to course</Link>
              </span>
            </div>
          </div>
          <div className="active-lesson-container">
            <div className="video-responsive">
              <YouTube
                videoId={ytId}
                opts={opts}
                onEnd={(e) => this.handleCompletion(e)}
                />
            </div>
          </div>
          <div className="active-lesson-footer">
            <div className="active-lesson-footer-left">
              {this.checkForLesson(-1, "Previous")}
            </div>
            <div className="active-lesson-footer-right">
              {this.checkForLesson(1, "Next")}
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
