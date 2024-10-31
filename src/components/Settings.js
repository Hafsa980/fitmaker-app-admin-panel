// Settings.js
import React, { useState } from 'react';
import './Settings.css';
import Sidebar from './Sidebar';

function Settings() {
  const [activeTab, setActiveTab] = useState('basicInfo');

  return (
    <div className="container">
      <Sidebar className="sidebar" />
      <div className="settings-container">
        <div className="settings-tabs">
          <button
            className={activeTab === 'basicInfo' ? 'active' : ''}
            onClick={() => setActiveTab('basicInfo')}
          >
            Basic Information
          </button>
          <button
            className={activeTab === 'password' ? 'active' : ''}
            onClick={() => setActiveTab('password')}
          >
            Password
          </button>
        </div>

        {activeTab === 'basicInfo' && (
          <div className="settings-content">
            <h2>Basic Information</h2>
            <form>
              <label>Full Name</label>
              <input type="text" placeholder="Full Name" />
              <label>Phone</label>
              <input type="text" placeholder="Phone" />
              <label>Email</label>
              <input type="email" placeholder="Email" disabled />
              <button type="submit">Update</button>
            </form>
          </div>
        )}

        {activeTab === 'password' && (
          <div className="settings-content">
            <h2>Change Password</h2>
            <form>
              <label>New Password</label>
              <input type="password" placeholder="New Password" />
              <label>Confirm Password</label>
              <input type="password" placeholder="Confirm Password" />
              <button type="submit">Update</button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}

export default Settings;
