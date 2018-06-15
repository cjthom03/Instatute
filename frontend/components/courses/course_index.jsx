import React from 'react';
import CourseIndexItem from './course_index_item';
import MainBanner from '../banners/main_banner';
import AboutInstatuteBanner from '../banners/about_instatute_banner';
import MyCoursesBanner from '../banners/my_courses_banner';

class CourseIndex extends React.Component {

  componentDidMount() {
    if(this.props.match.path === "/my-courses") {
      this.props.fetchSubscriptions()
        .then(() => this.props.fetchCourses());
    } else {
      this.props.fetchCourses();
    }
  }

  banners() {
    if(this.props.match.path === "/my-courses") {
      return (<MyCoursesBanner />);
    }
    return(
      <div>
        <MainBanner />
        <AboutInstatuteBanner />
      </div>
    );
  }

  render () {
    let courseIndex = this.props.loading ? (
        <div className="loader">Loading...</div>
      ) : (
        <div className="course-index">
          {this.props.courses.map( course =>
            <CourseIndexItem key={course.id} course={course} /> )}
        </div>
      );

    return(
      <main>
        {this.banners()}
        <div className="course-index-header">{this.props.header}</div>
        {courseIndex}
      </main>
    );
  }
}

export default CourseIndex;
