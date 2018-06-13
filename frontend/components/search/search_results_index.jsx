import React from 'react';
import SearchResultsIndexItem from './search_results_index_item';

class SearchResultsIndex extends React.Component {
  constructor(props) {
    super(props);
    if (!props.location.search) props.history.push('/');
  }

  componentDidMount() {
    this.props.fetchAllSearchResults(this.props.location.search);
  }

  componentWillReceiveProps(nextProps) {
    if(this.props.location.search != nextProps.location.search) {
      this.props.fetchAllSearchResults(nextProps.location.search);
    }
  }

  render() {
    if (this.props.loading){
      return(
        <div className="search-results-container">
          <div className="loader">Loading...</div>
        </div>
      );
    } else {
      let courses = this.props.courses;
      let query = this.props.location.search.split("=")[1];
      return(
        <div className="search-results-container">
          <div className="search-results-header-title">
            {courses.length} results for <strong>{decodeURI(query)}</strong>
        </div>
        {courses.map( course =>
          <SearchResultsIndexItem
            key={course.id}
            course={course} />
        )}
      </div>);
    }
  }
}

export default SearchResultsIndex;
