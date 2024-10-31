// Sidebar.js
import React from 'react';
import { FaHome, FaUsers, FaCog, FaVideo } from 'react-icons/fa';
import './Sidebar.css';
import { Link } from 'react-router-dom';

const Sidebar = ({ isOpen }) => {
  return (
    <nav className={`sidebar ${isOpen ? 'open' : ''}`}>
      <div className="sidebar-header">
        <h1>ANDREW'S</h1>
      </div>
      <ul>
        <li><Link to="/dashboard"><FaHome /> Dashboard</Link></li>
        <li><Link to="/users"><FaUsers /> Users</Link></li>
        <li><Link to="/settings"><FaCog /> Settings</Link></li>
        <li><Link to="/workouts"><FaVideo /> Workouts</Link></li>
      </ul>
      <button className="go-live">Go Live</button>
    </nav>
  );
};

export default Sidebar;
