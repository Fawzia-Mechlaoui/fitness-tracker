import React from 'react';

const ExerciseTracker = () => {
    return (
        <div>
            <h2>Exercise Tracker</h2>
            <form>
                <label htmlFor="exerciseName">Exercise Name:</label>
                <input type="text" id="exerciseName" name="exerciseName" />
                <label htmlFor="exerciseDuration">Duration (min):</label>
                <input type="number" id="exerciseDuration" name="exerciseDuration" />
                <label htmlFor="exerciseIntensity">Intensity:</label>
                <select id="exerciseIntensity" name="exerciseIntensity">
                    <option value="low">Low</option>
                    <option value="medium">Medium</option>
                    <option value="high">High</option>
                </select>
                <button type="submit">Log Exercise</button>
            </form>
        </div>
    );
};

export default ExerciseTracker;