import React from 'react';
import { withRouter } from 'react-router-dom';

class SearchContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {query: ""};
  }

  componentWillUnmount() {
    //clear search slice of state
  }

  handleInput(e){
    let query = e.target.value;
    this.setState({query});
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.history.push(`/search/?q=${this.state.query}`);
  }



  render() {
    return(
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
    );
  }
}

export default withRouter(SearchContainer);
