import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import './NavBar.css';

import userIcon from '../assets/images/user.svg';
import dashboardIcon from '../assets/images/computer.svg';
import calendarIcon from '../assets/images/calendar.svg';
import inventoryIcon from '../assets/images/flask.svg';
import reportIcon from '../assets/images/report.svg';
import logoutIcon from '../assets/images/logout.svg';

const Sidebar = () => {
    const { signOut } = useAuth();
    
    const handleLogout = () => {
        signOut();
    };

  return (
    <nav className="side-nav">
      <div className="nav-top">
        <div>
          <img src={userIcon} className="profile-icon" />
          <p className="user-name">Account</p>
        </div>

        <ul className="nav-list">
          <li>
            <Link to="/home">
              <img src={dashboardIcon} className="nav-icon" />
              Dashboard
            </Link>
          </li>
          <li>
            <Link to="/calendar">
              <img src={calendarIcon} className="nav-icon" />
              Calendar
            </Link>
          </li>
          <li>
            <Link to="/inventory">
              <img src={inventoryIcon} className="nav-icon" />
              Inventory
            </Link>
          </li>
          <li>
            <Link to="/analytics">
              <img src={reportIcon} className="nav-icon" />
              Analytics
            </Link>
          </li>
        </ul>
      </div>

      <div className="nav-bottom">
        <ul className="logout">
          <li>
            <button onClick={handleLogout} className="logout-btn">
              <img src={logoutIcon} className="logout-icon" />
              Logout
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Sidebar;
