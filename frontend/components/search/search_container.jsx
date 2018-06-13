import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
 import { searchResultsToArray } from '../../reducers/search_selectors';
import {
  fetchDropdownSearchResults,
  clearSearchResults
 } from '../../actions/search_actions';
 import DropdownListItem from './dropdown_search_item';


class SearchContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {query: ""};
    this.submitAndClear = this.submitAndClear.bind(this);
  }


  handleInput(e){
    let query = e.target.value;
    this.setState({query});
    this.props.fetchDropdownSearchResults(query);
    let modal = document.querySelector('#search-modal');
     e.target.value ? (
       modal.classList.add("searching")
     ):(
       modal.classList.remove("searching")
     );
  }

  handleDropdownClick(e, query) {
    this.setState({query});
    this.submitAndClear(query);
  }

  handleSubmit(e){
    e.preventDefault();
    this.submitAndClear(this.state.query);
  }

  submitAndClear(query) {
    this.props.history.push(`/search/?q=${query}`);
    this.props.clearSearchResults();
    let modal = document.querySelector('#search-modal');
    modal.classList.remove("searching");
  }

  render() {
    return(
      <div className="search-container">
        <div className="search-input-div">
          <form onSubmit={(e) => this.handleSubmit(e)}>
            <input
              onChange={(e) => this.handleInput(e)}
              value={this.state.query}
              className="search-input"
              type="text"
              placeholder="Search for Courses"
              />
            <button type='submit'>
              <i className="fas fa-search search-icon"></i>
            </button>
          </form>
        </div>
        <div>
          <ul className="dropdown-search-container">
            {this.props.dropdownSearchResults.map((searchResult , i) =>
              <div key={i}
                onClick={(e) => this.handleDropdownClick(e, searchResult.title)}>
                <DropdownListItem
                  key={searchResult.id}
                  searchResult={searchResult} />
              </div>
            )}
          </ul>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  dropdownSearchResults: searchResultsToArray(state.entities.searchResults)
});

const mapDispatchToProps = dispatch => ({
  fetchDropdownSearchResults: query =>
    dispatch(fetchDropdownSearchResults(query)),
  clearSearchResults: () => dispatch(clearSearchResults())
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SearchContainer));
