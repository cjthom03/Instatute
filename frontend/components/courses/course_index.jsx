import React from 'react';
import CourseIndexItem from './course_index_item';
import MainBanner from '../banners/main_banner';
import AboutInstatuteBanner from '../banners/about_instatute_banner';


class CourseIndex extends React.Component {

  componentWillMount() {
    //set the loading spinner to true
  }

  componentDidMount() {
    this.props.fetchCourses();
    //.then set the ui: loading to false
  }

  render () {
    return(
      <main>
        <MainBanner />
        <AboutInstatuteBanner />
        <div className="course-index-header"> Love to Learn: Start here </div>
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
