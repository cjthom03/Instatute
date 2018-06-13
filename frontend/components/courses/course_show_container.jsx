import { connect } from 'react-redux';
import { _nullCourse } from '../../util/null_objects';
import { fetchSingleCourse } from '../../actions/course_actions';
import {
  fetchSubscriptions,
  postSubscription
 } from '../../actions/subscription_actions';
import { openModal } from '../../actions/modal_actions';
import CourseShow from './course_show';

const mapStateToProps = (state, ownProps) => ({
  course: state.entities.courses[ownProps.match.params.courseId] || _nullCourse,
  lessons: state.entities.lessons,
  subscriptions: state.entities.subscriptions,
  subscribed: Boolean(state.entities.subscriptions[ownProps.match.params.courseId]),
  loggedIn: Boolean(state.session.id),
  userId: state.session.id,
  loading: state.ui.loading
});

const mapDispatchToProps = dispatch => ({
  fetchSingleCourse: courseId => dispatch(fetchSingleCourse(courseId)),
  fetchSubscriptions: () => dispatch(fetchSubscriptions()),
  postSubscription: subscription => dispatch(postSubscription(subscription)),
  openModal: modal => dispatch(openModal(modal))
});

export default connect(mapStateToProps, mapDispatchToProps)(CourseShow);
