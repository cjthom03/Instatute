import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import SessionButtons from './session_buttons';
import { openModal } from '../../actions/modal_actions';

import { withRouter } from 'react-router-dom';


const mapStateToProps = (state, ownProps) => {
  const { entities, session } = state;
  return { currentUser: entities.users[session.id] };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  logout: () => dispatch(logout()),
  openModal: modal => dispatch(openModal(modal))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SessionButtons));
