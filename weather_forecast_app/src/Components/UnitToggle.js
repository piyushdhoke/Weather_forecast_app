import React from 'react';
import "./style.css"

const UnitToggle = ({ unit, onToggle }) => {
    return (
        <button   className="unit-toggle" onClick={onToggle}>
            {unit === 'metric' ? 'Switch to Fahrenheit' : 'Switch to Celsius'}
        </button>
    );
};

export default UnitToggle;
