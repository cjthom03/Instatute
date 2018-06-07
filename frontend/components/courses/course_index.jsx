import React from 'react';
import CourseIndexItem from './course_index_item';
import AboutInstatuteBanner from '../banners/about_instatute_banner';

class CourseIndex extends React.Component {

  componentDidMount() {
    this.props.fetchCourses();
  }

  render () {
    return(
      <main>
        <div> Main Banner goes here </div>
        <AboutInstatuteBanner />
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
