import React from 'react';
import { Link } from 'react-router-dom';

const SessionButtons = ({currentUser, logout, openModal}) => {
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
      <div>
        <Link to="/my-courses">My Courses</Link>
        <span>{currentUser.full_name}</span>
        <button className="btn btn-primary btn-header"
          onClick={() => logout()}>Logout</button>
      </div>
    );
  }
};

export default SessionButtons;
