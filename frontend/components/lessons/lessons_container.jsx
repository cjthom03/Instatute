import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import {
  receiveSubcriptionErrors,
  clearSubscriptionErrors
 } from '../../actions/subscription_actions';
 import { openModal } from '../../actions/modal_actions';
import LessonsIndex from './lessons_index';

const mapStateToProps = (state, ownProps) => ({
  subscribed: Boolean(state.entities.subscriptions[ownProps.match.params.courseId]),
  subscriptionErrors: state.errors.subscription,
  loggedIn: Boolean(state.session.id),
  lessons: state.entities.lessons
});

const mapDispatchToProps = dispatch => ({
  receiveSubcriptionErrors: errors => dispatch(receiveSubcriptionErrors(errors)),
  clearSubscriptionErrors: () => dispatch(clearSubscriptionErrors()),
  openModal: modal => dispatch(openModal(modal))
});


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(LessonsIndex));
