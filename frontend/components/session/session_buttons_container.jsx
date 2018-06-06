import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import SessionButtons from './session_buttons';
import { openModal } from '../../actions/modal_actions';

const mapStateToProps = state => {
  const { entities, session } = state;
  return { currentUser: entities.users[session.id] };
};

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  openModal: modal => dispatch(openModal(modal))
});

export default connect(mapStateToProps, mapDispatchToProps)(SessionButtons);
