import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Verification from './components/Verification';
import Dashboard from './components/Dashboard';
import Settings from './components/Settings';
// import ChangePassword from './components/ChangePassword';
// import AddWorkout from './components/AddWorkout';
import UserList from './components/UserList';
import Workouts from './components/WorkoutDashboard';
// import UserDetailsModal from './components/UserDetailsModal';
import {FaBars} from 'react-icons/fa';

function App() {
  return (
    <Router>     
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/verification" element={<Verification />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/users" element={<UserList />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/workouts" element={<Workouts />} />
            {/* <Route path="/change-password" element={<ChangePassword />} />
            <Route path="/add-workout" element={<AddWorkout />} />
            <Route path="/subscriptions" element={<UserDetailsModal />} />
             */}
          </Routes>
    </Router>
  );
}

export default App;
