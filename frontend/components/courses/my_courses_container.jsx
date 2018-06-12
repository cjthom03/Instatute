import { connect } from 'react-redux';
import { coursesToArray } from '../../reducers/course_selectors';
import { fetchCourses } from '../../actions/course_actions';
import { fetchSubscriptions } from '../../actions/subscription_actions';
import CourseIndex from './course_index';

const mapStateToProps = (state, ownProps) => ({
  courses: coursesToArray(state.entities.courses),
  loading: state.ui.loading,
  header: ""
});

const mapDispatchToProps = dispatch => ({
  fetchCourses: () => dispatch(fetchCourses(true)),
  fetchSubscriptions: () => dispatch(fetchSubscriptions())
});

export default connect(mapStateToProps, mapDispatchToProps)(CourseIndex);
