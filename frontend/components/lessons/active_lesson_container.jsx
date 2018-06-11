import { connect } from 'react-redux';
import ActiveLesson from './active_lesson';
import { _nullCourse, _nullLesson} from '../../util/null_objects';
import { fetchSingleCourse } from '../../actions/course_actions';
import { lessonOrderToArray } from '../../reducers/lesson_selectors';
import { openSidebar } from '../../actions/sidebar_actions';

const mapStateToProps = (state, ownProps) => {
  let params = ownProps.match.params;
  return ({
  course: state.entities.courses[params.courseId] || _nullCourse,
  activeLesson: state.entities.lessons[params.lessonId] || _nullLesson,
  lessons: state.entities.lessons,
  lessonOrder: lessonOrderToArray(state.entities.lessons)
  });
};

const mapDispatchToProps = dispatch => ({
  fetchSingleCourse: courseId => dispatch(fetchSingleCourse(courseId)),
  openSidebar: () => dispatch(openSidebar())
});

export default connect(mapStateToProps, mapDispatchToProps)(ActiveLesson);
