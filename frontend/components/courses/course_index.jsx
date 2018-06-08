import React from 'react';
import CourseIndexItem from './course_index_item';
import MainBanner from '../banners/main_banner';
import AboutInstatuteBanner from '../banners/about_instatute_banner';


class CourseIndex extends React.Component {

  componentDidMount() {
    this.props.fetchCourses();
  }

  render () {
    let courseIndex;
    if(this.props.loading) {
      courseIndex = (
        <div>
          <div className="loader">Loading...</div>
        </div>
      );
    } else {
      courseIndex = (
        <div className="course-index">
          {this.props.courses.map( course =>
            <CourseIndexItem key={course.id} course={course}/>
          )}
        </div>
      );
    }

    return(
      <main>
        <MainBanner />
        <AboutInstatuteBanner />
        <div className="course-index-header"> Love to Learn: Start here </div>
        {courseIndex}
      </main>
    );
  }
}

export default CourseIndex;
