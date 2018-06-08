import React from 'react';
import CourseRatings from './ratings';
import { Redirect } from 'react-router-dom';

class CourseShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = { courseExists: true };
  }


  componentWillReceiveProps(nextProps) {
    if (!nextProps.course.id) this.setState({courseExists: false});
  }

  componentDidMount() {
    this.props.fetchSingleCourse(this.props.match.params.courseId)
      .then(
        null,
        () => this.setState({courseExists: false})
        );
  }

  render() {
    let course = this.props.course;
    if (!this.state.courseExists) {
      return (<Redirect to='/' />);
    } else {
    return (
      <main>
        <div className="course-show-header-container">
          <div className="course-show-header-inner">
            <div className="course-show-header-inner-left">
              <img src={course.image_url} />
            </div>
            <div className="course-show-header-inner-right">
              <div className="course-show-header-title">{course.title} and some other studd too this is just a test</div>
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
}

export default CourseShow;
