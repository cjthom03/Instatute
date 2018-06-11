import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { closeSidebar } from '../../actions/sidebar_actions';
import LessonsIndex from './lessons_index';

class Sidebar extends React.Component{

  handleClick() {
    let el = document.querySelector(".sidebar");
    el.addEventListener('animationend', () => this.props.closeSidebar());
    el.classList.remove("slideInLeft");
    el.classList.add("slideOutLeft");

  }

  render() {
    if (!this.props.sidebar) return null;

    return(
      <div className="sidebar animated slideInLeft">
        <button onClick={() => this.handleClick()}>&times;</button>
        <LessonsIndex lessons={this.props.lessons} classAdd={"sidebar"}/>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  sidebar: state.ui.sidebar,
  lessons: state.entities.lessons
});

const mapDispatchToProps = dispatch => ({
  closeSidebar: () => dispatch(closeSidebar())
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Sidebar)
);
