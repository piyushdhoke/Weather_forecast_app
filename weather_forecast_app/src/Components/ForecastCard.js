import React from 'react';
import WeatherIcon from './WeatherIcon';
import "./style.css"

const ForecastCard = ({ forecast, unit }) => {
    const tempHigh = unit === 'metric' ? forecast.main.temp_max : (forecast.main.temp_max * 9/5) + 32;
    const tempLow = unit === 'metric' ? forecast.main.temp_min : (forecast.main.temp_min * 9/5) + 32;

    return (
        <div className="forecast-card">
            <h3>{new Date(forecast.dt * 1000).toLocaleDateString('en-US', { weekday: 'long' })}</h3>
            <WeatherIcon icon={forecast.weather[0].icon} />
            <p>High: {tempHigh.toFixed(1)}°</p>
            <p>Low: {tempLow.toFixed(1)}°</p>
        </div>
    );
};

export default ForecastCard;
