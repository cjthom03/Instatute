import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { closeSidebar } from '../../actions/sidebar_actions';
import LessonsIndex from './lessons_index';

const Sidebar = (props) => {
  if (!props.sidebar) return null;

  return(
    <div className="sidebar animated slideInLeft">
      <button onClick={() => props.closeSidebar()}>&times;</button>
      <LessonsIndex lessons={props.lessons} classAdd={"sidebar"}/>
    </div>
  );
};

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
