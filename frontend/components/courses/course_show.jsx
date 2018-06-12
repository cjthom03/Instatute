import React from 'react';
import { Redirect } from 'react-router-dom';
import CourseRatings from './ratings';
import LessonsIndexContainer from '../lessons/lessons_container';


class CourseShow extends React.Component {
  constructor(props) {
    super(props);
    this.subscriptionComponent = this.subscriptionComponent.bind(this);
    this.subscribeUser = this.subscribeUser.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.course.id != nextProps.match.params.courseId) {
      this.props.fetchSingleCourse(nextProps.match.params.courseId)
        .then(null,() => this.props.history.push('/'));
    } else if (this.props.loggedIn !== nextProps.loggedIn) {
      this.props.fetchSubscriptions();
    }
  }

  componentDidMount() {
    this.props.fetchSingleCourse(this.props.match.params.courseId)
      .then(
        () => this.props.fetchSubscriptions(),
        () => this.props.history.push('/'));
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
      return(<button onClick={this.subscribeUser}
        className="btn btn-primary">Subscribe</button>);
    } else {
      return(
        <div className="course-show-header-subscribed">
          <span className="course-show-header-text">Subscribed</span>
          <span className="fa-stack fa-1x">
            <i className="fas fa-circle fa-stack-1x"></i>
            <i className="fas fa-check-circle fa-stack-1x"></i>
          </span>

        </div>);
    }
  }

  render() {
    let course = this.props.course;
    return (
      <main>
        <div className="course-show-header-container">
          <div className="course-show-header-inner">
            <div className="course-show-header-inner-left">
              <img src={course.image_url} />
            </div>
            <div className="course-show-header-inner-right">
              <div className="course-show-header-title">{course.title}</div>
              {this.subscriptionComponent()}
              <CourseRatings
                className={"course-item-ratings"}
                course={course}
                />
            </div>
          </div>
        </div>
        <LessonsIndexContainer />
      </main>
      );
    }
  }


export default CourseShow;
