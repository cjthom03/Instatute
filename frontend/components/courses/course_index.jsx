import React from 'react';
import CourseIndexItem from './course_index_item';

class CourseIndex extends React.Component {

  componentDidMount() {
    this.props.fetchCourses();
  }

  render () {
    return(
      <main>
        <div> Main Banner goes here </div>
        <div> About this site banner goes here </div>
        <div> Course Index Header </div>
        <div className="course-index">
          {this.props.courses.map( course =>
            <CourseIndexItem key={course.id} course={course}/>
          )}
        </div>
      </main>
    );
  }
}

export default CourseIndex;
