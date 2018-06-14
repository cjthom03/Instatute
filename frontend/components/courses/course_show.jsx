import React from 'react';
import { Redirect } from 'react-router-dom';
import CourseRatings from './ratings';
import LessonsIndexContainer from '../lessons/lessons_container';
import ProgressBar from './progress_bar';


class CourseShow extends React.Component {
  constructor(props) {
    super(props);
    this.subscriptionComponent = this.subscriptionComponent.bind(this);
    this.subscribeUser = this.subscribeUser.bind(this);
  }

  componentDidMount() {
    this.props.fetchSingleCourse(this.props.match.params.courseId)
      .then(
        () => this.props.fetchSubscriptions(),
        () => this.props.history.push('/'));
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.course.id != nextProps.match.params.courseId) {
      this.props.fetchSingleCourse(nextProps.match.params.courseId)
        .then(
          () => this.props.fetchSubscriptions(),
          () => this.props.history.push('/'));
    } else if (this.props.loggedIn !== nextProps.loggedIn) {
      this.props.fetchSubscriptions();
    }
  }

  subscribeUser() {
    if (!this.props.loggedIn) {
      this.props.openModal("login");
    } else {
      let user_id = this.props.userId;
      let course_id = this.props.course.id;
      this.props.postSubscription({user_id, course_id});
    }
  }

  subscriptionComponent() {
    if(!this.props.subscribed) {
      return(
        <button
          onClick={this.subscribeUser}
          className="btn btn-primary">
          Subscribe
        </button>
    );
    } else if (this.props.nextLesson) {
      let buttonText = !Object.keys(this.props.completions).length ? ("Start Course") : (`Continue to Lesson ${this.props.nextLesson.order_num}`);
      return(
        <button
          onClick={() => this.props.history.push(`/courses/${this.props.course.id}/lessons/${this.props.nextLesson.id}`)}
          className="btn btn-primary">
          {buttonText}
        </button>)
      ;
    } else {
      return(
        <div className="course-show-header-subscribed">
          <span className="course-show-header-text">Completed</span>
          <span className="fa-stack fa-1x">
            <i className="fas fa-circle fa-stack-1x"></i>
            <i className="fas fa-check-circle fa-stack-1x"></i>
          </span>

        </div>);
    }
  }

  progressComponent() {
    if(this.props.subscribed) {
      let completionCount = Object.keys(this.props.completions).length;
      let lessonCount = this.props.course.lesson_count;
      return (
        <ProgressBar
        completionCount={completionCount}
        lessonCount={lessonCount}
        />
      );
    }
  }

  render() {
    if (this.props.loading){
      return(
        <div className="search-results-container">
          <div className="loader">Loading...</div>
        </div>
      );
    } else {
    let course = this.props.course;

    return (
      <main>
        <div className="course-show-header-container">
          <div className="course-show-header-inner">
            <div className="course-show-header-inner-left">
              <img src={course.image_url} />
            </div>
            <div className="course-show-header-inner-right">
              <div className="course-show-header-inner-top">
                <div className="course-show-header-title">{course.title}</div>
                {this.subscriptionComponent()}
                <CourseRatings
                  className={"course-item-ratings"}
                  course={course}
                  />
              </div>
              <div className="course-show-header-inner-bottom">
                {this.progressComponent()}
              </div>
            </div>
          </div>
        </div>
        <LessonsIndexContainer />
      </main>
      );
    }
  }
}


export default CourseShow;
