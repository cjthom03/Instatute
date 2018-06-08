import React from 'react';
import CourseRatings from './ratings';

class CourseShow extends React.Component {

  componentDidMount() {
    this.props.fetchSingleCourse(this.props.match.params.courseId)
      .then(res => console.log(res));
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
            <div>
              <h1>{course.title}</h1>
              <p>{course.description}</p>
              <button className="btn btn-primary">This is a test button</button>
              <CourseRatings
                className={"course-item-ratings"}
                course={course}
                />
            </div>
          </div>
        </div>
      </main>
    );
  }
}

export default CourseShow;
