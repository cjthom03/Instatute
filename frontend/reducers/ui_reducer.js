import { combineReducers } from 'redux';
import ModalReducer from './modal_reducer';
import LoadingReducer from './loading_reducer';

export default combineReducers({
  modal: ModalReducer,
  loading: LoadingReducer
});
