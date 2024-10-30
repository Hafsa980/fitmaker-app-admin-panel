import React, { useState } from "react";
import { FaBars, FaHome, FaUsers, FaVideo, FaChartBar } from "react-icons/fa";
import "./Dashboard.css";
import profile from '../images/image4.jpg'
import graph1 from '../images/graph1.png'
import graph2 from '../images/graph2.png'
import user from '../images/image4.jpg'

function Dashboard() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="dashboard-container">
      {/* Sidebar */}
      <nav className={`sidebar ${isSidebarOpen ? "open" : ""}`}>
        <div className="sidebar-header">
          <h1>ANDREW'S</h1>
          <button className="sidebar-toggle" onClick={toggleSidebar}>
            <FaBars />
          </button>
        </div>
        <ul>
          <li><FaHome /> Dashboard</li>
          <li><FaUsers /> Users</li>
          <li><FaChartBar /> Subscriptions</li>
          <li><FaVideo /> Videos</li>
        </ul>
        <button className="go-live">Go Live</button>
      </nav>

      {/* Main Content */}
      <div className="main-content">
        <header>
          <button className="mobile-toggle" onClick={toggleSidebar}>
            <FaBars />
          </button>
          <div className="profile-section">
            <img src={profile} alt="Profile" className="profile-pic" />
            <p>John Doe</p>
            {/* <span>admin@example.com</span> */}
          </div>
        </header>

        <div className="welcome-section">
          <h2>Welcome, John</h2>
          <p>Hello, here you can manage your business efficiently.</p>
        </div>

        <div className="stats-user">
        
          {/* Dashboard Stats */}
          <div className="stats-section">
            <div className="card basic-plan">
              <h3>Basic Gym Plan</h3>
              <p>24</p>
            </div>
            <div className="card standard-plan">
              <h3>Standard Gym Plan</h3>
              <p>24</p>
            </div>
            <div className="card premium-plan">
              <h3>Premium Gym Plan</h3>
              <p>24</p>
            </div>
          </div>
          {/* user section of dashboard */}
          <div className="user-section">
            <img src={user} alt="user" />
            <h3>11 Sep, 2024</h3>
            <h1>Selena John</h1>
            <h3>Female</h3>
          </div>
          <div className="user-section">
            <img src={user} alt="user" />
            <h3>11 Sep, 2024</h3>
            <h1>Selena John</h1>
            <h3>Female</h3>
          </div>
        </div>

        {/* Graph Section */}
        <div className="graph-section">
          <div className="monthly-revenue">
            <h4>Monthly Revenue</h4>
            <img src={graph1} alt="users" />
          </div>
          <div className="subscription-summary">
            <h4>Today's Subscriptions</h4>
            <img src={graph2} alt="subscriptions" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;