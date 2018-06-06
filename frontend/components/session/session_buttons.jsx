import React from 'react';
import { Link } from 'react-router-dom';

const SessionButtons = ({currentUser, logout, openModal}) => {
  if (!currentUser) {
    return (
      <div>
        <button onClick={() => openModal('login')}>Login</button>
        <button onClick={() => openModal('signup')}>Sign Up</button>
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
