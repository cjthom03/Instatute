import React from 'react';
import { Link } from 'react-router-dom';

const SessionButtons = ({currentUser, logout}) => {
  if (!currentUser) {
    return (
      <div>
        <Link to="/signup">Sign Up</Link>
        <Link to="/login">Log In</Link>
      </div>
    );
  } else {
    return (
      <div>
        <Link to="/my-courses">My Courses</Link>
        <span>{currentUser.full_name}</span>
        <button onClick={() => logout()}>Logout</button>
      </div>
    );
  }
};

export default SessionButtons;
