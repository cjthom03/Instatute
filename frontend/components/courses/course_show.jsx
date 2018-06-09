import React from 'react';
import CourseRatings from './ratings';
import { Redirect } from 'react-router-dom';

class CourseShow extends React.Component {
  constructor(props) {
    super(props);
  }


  componentWillReceiveProps(nextProps) {
    if (!nextProps.course.id) {
      this.props.history.push('/');
    } else if (this.props.course.id != nextProps.course.id) {
      this.props.fetchSingleCourse(nextProps.course.id);
    }
  }

  componentDidMount() {
    this.props.fetchSingleCourse(this.props.match.params.courseId)
      .then(null,() => this.props.history.push('/'));
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
              <button className="btn btn-primary">Subscribe</button>
              <CourseRatings
                className={"course-item-ratings"}
                course={course}
                />
            </div>
          </div>
        </div>
        <div className="lessons-index-container">
        </div>
      </main>
      );
    }
  }


export default CourseShow;
