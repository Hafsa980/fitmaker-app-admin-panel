import React, { useState } from 'react';
import './WorkoutDashboard.css';
import Sidebar from './Sidebar';
import image from '../images/image2.png'

function WorkoutDashboard() {
  const [workouts, setWorkouts] = useState([
    { id: 1, name: 'Arms Exercise', rating: 4, image: 'workout-image-url' },
    { id: 2, name: 'Arms Exercise', rating: 4, image: 'workout-image-url' },
    { id: 3, name: 'Arms Exercise', rating: 4, image: 'workout-image-url' },
    { id: 4, name: 'Arms Exercise', rating: 4, image: 'workout-image-url' },
    { id: 5, name: 'Arms Exercise', rating: 4, image: 'workout-image-url' },
    { id: 6, name: 'Arms Exercise', rating: 4, image: 'workout-image-url' }
  ]);

  const [newWorkoutName, setNewWorkoutName] = useState('');
  const [newWorkoutImage, setNewWorkoutImage] = useState('');
  const [newWorkoutRating, setNewWorkoutRating] = useState('');

  const addWorkout = () => {
    const newWorkout = {
      id: workouts.length + 1,
      name: newWorkoutName,
      image: newWorkoutImage,
      rating: newWorkoutRating
    };
    setWorkouts([...workouts, newWorkout]);
    setNewWorkoutName('');
    setNewWorkoutImage('');
    setNewWorkoutRating('');
  };

  return (
    <div className="dashboard-container">
      {/* Sidebar */}
      <Sidebar />

      {/* Workout Content */}
      <div className="workout-content">
        <div className="workout-header">
          <h2>Workouts</h2>
          <div className="add-workout">
            <input
              type="text"
              placeholder="Workout Name"
              value={newWorkoutName}
              onChange={(e) => setNewWorkoutName(e.target.value)}
            />
            <input
              type="text"
              placeholder="Image URL"
              value={newWorkoutImage}
              onChange={(e) => setNewWorkoutImage(e.target.value)}
            />
            <input
              type="number"
              placeholder="Rating"
              value={newWorkoutRating}
              onChange={(e) => setNewWorkoutRating(e.target.value)}
              min="1"
              max="5"
            />
            <button onClick={addWorkout}>Add</button>
          </div>
        </div>

        {/* Workout Grid */}
        <div className="workout-grid">
          {workouts.map((workout) => (
            <div key={workout.id} className="workout-card">
              <img src={image} alt={workout.name} />
              <h3>{workout.name}</h3>
              <p>Rating: {workout.rating} ⭐</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default WorkoutDashboard;
