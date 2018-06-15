import React from 'react';
import { Redirect } from 'react-router-dom';
import LessonsIndexContainer from '../lessons/lessons_container';
import CourseShowHeader from './course_show_header';


class CourseShow extends React.Component {
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

  render() {
    if (this.props.loading){
      return(
        <div className="search-results-container">
          <div className="loader">Loading...</div>
        </div>
      );
    } else {

    return (
      <main>
        <CourseShowHeader props={this.props} />
        <LessonsIndexContainer />
      </main>
      );
    }
  }
}

export default CourseShow;
