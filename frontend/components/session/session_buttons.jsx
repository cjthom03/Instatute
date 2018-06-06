import React from 'react';
import { Link } from 'react-router-dom';

const SessionButtons = ({currentUser, logout, openModal, history}) => {
  // debugger;
  if (!currentUser) {
    return (
      <div>
          <button className="btn btn-secondary btn-header"
            onClick={() => openModal('login')}>Login</button>
          <button className="btn btn-primary btn-header"
            onClick={() => openModal('signup')}>Sign Up</button>
      </div>
    );
  } else {
    return (
      <div className="header-inner-right-logout-container">
        <Link className="header-mycourses"
          to="/my-courses">
          My Courses
        </Link>
        <span className="header-username">
          {currentUser.full_name}
        </span>
        <button className="btn btn-primary btn-header"
          onClick={() => logout().then(history.push('/'))}>Logout</button>
      </div>
    );
  }
};

export default SessionButtons;
