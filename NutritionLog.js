import React from 'react';

const NutritionLog = () => {
    return (
        <div>
            <h2>Nutrition Log</h2>
            <form>
                <label htmlFor="foodName">Food Name:</label>
                <input type="text" id="foodName" name="foodName" />
                <label htmlFor="calories">Calories:</label>
                <input type="number" id="calories" name="calories" />
               
                <button type="submit">Log Nutrition</button>
            </form>
        </div>
    );
};

export default NutritionLog;
