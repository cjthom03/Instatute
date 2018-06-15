import React from 'react';
import LessonsIndex from './lessons_index';
import Sidebar from './sidebar';
import ActiveLessonHeader from './active_lesson_header';
import YtPlayer from './youtube_player';
import ActiveLessonFooter from './active_lesson_footer';

class ActiveLesson extends React.Component {
  componentDidMount() {
    this.props.fetchSingleCourse(this.props.match.params.courseId)
      .then( () => this.props.fetchSubscriptions()
        .then( () => this.validateLessonSubscription()),
        () => this.props.history.push('/'));
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.course.id != nextProps.match.params.courseId ||
    this.props.activeLesson.id != nextProps.match.params.lessonId) {
      this.props.fetchSingleCourse(nextProps.match.params.courseId)
        .then( () => this.props.fetchSubscriptions()
          .then( () => this.validateLessonSubscription()),
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

  render(){
      if(this.props.subscriptions[this.props.course.id]){
      return(
        <div>
          <Sidebar />
          <ActiveLessonHeader props={this.props} />
          <YtPlayer props={this.props} />
           <ActiveLessonFooter props={this.props} />
        </div>
      );
    } else { return(<div className="active-lesson-container"></div>); }
  }
}

export default ActiveLesson;
