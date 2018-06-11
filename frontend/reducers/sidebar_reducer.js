import {
  OPEN_SIDEBAR,
  CLOSE_SIDEBAR
} from '../actions/sidebar_actions';

export default (oldState = false, action) => {
  switch(action.type) {
    case OPEN_SIDEBAR:
      return true;
    case CLOSE_SIDEBAR:
      return false;
    default:
      return oldState;
  }
};
