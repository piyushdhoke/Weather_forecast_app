import React from 'react';
import WeatherIcon from './WeatherIcon';
import "./style.css"

const WeatherCard = ({ weather, unit }) => {
    const temp = unit === 'metric' ? weather.main.temp : (weather.main.temp * 9/5) + 32;
    return (
        <div className="weather-card">
            <h2>{weather.name}</h2>
            <p className="temperature">{temp.toFixed(1)}° {unit === 'metric' ? 'C' : 'F'}</p>
            <WeatherIcon icon={weather.weather[0].icon} />
            <p>{weather.weather[0].description}</p>
        </div>
    );
};

export default WeatherCard;
