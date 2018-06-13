import React from 'react';
import { connect } from 'react-redux';

import SessionButtonsContainer from '../session/session_buttons_container';
import SearchContainer from '../search/search_container';
import HeaderLogo from './header_logo';
import { clearSearchResults } from '../../actions/search_actions';

class Header extends React.Component {

  clearSearch(e) {
    let modal = document.querySelector('#search-modal');
    modal.classList.remove("searching");
    this.props.clearSearchResults();
  }

  render() {
    return (
      <div>
        <header className="header-main">
          <div className="header-inner">
            <HeaderLogo />
            <nav className="header-inner-center">
              <SearchContainer />
            </nav>
            <nav className="header-inner-right">
              <SessionButtonsContainer />
            </nav>
          </div>
        </header>
        <div
          onClick={(e) => this.clearSearch()}
          id="search-modal" className=""></div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  clearSearchResults: () => dispatch(clearSearchResults())
});


export default connect(null, mapDispatchToProps)(Header);
