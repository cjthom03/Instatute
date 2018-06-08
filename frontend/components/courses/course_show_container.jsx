import { connect } from 'react-redux';
import { _nullCourse } from '../../util/null_objects';
import { fetchSingleCourse } from '../../actions/course_actions';
import CourseShow from './course_show';

const mapStateToProps = (state, ownProps) => ({
  course: state.entities.courses[ownProps.match.params.courseId] || _nullCourse
});

const mapDispatchToProps = dispatch => ({
  fetchSingleCourse: courseId => dispatch(fetchSingleCourse(courseId))
});

export default connect(mapStateToProps, mapDispatchToProps)(CourseShow);
