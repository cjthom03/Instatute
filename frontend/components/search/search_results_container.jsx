import { connect } from 'react-redux';
import { coursesToArray } from '../../reducers/course_selectors';
import { fetchAllSearchResults } from '../../actions/search_actions';
import SearchResultsIndex from './search_results_index';


const mapStateToProps = state => ({
  courses: coursesToArray(state.entities.courses),
  loading: state.ui.loading
});

const mapDispatchToProps = dispatch => ({
  fetchAllSearchResults: query => dispatch(fetchAllSearchResults(query))
});

export default
  connect(mapStateToProps, mapDispatchToProps)(SearchResultsIndex);
