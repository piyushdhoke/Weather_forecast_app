import React, { useState, useEffect } from 'react';
import { getWeatherByCity,getFiveDayForecast } from '../Services/weathetServices';
import WeatherCard from '../Components/WeatherCard';
import ForecastCard from '../Components/ForecastCard';
import CitySearch from '../Components/CitySearch';
import UnitToggle from '../Components/UnitToggle';
import "../Components/style.css"

const WeatherPage = () => {
    const [city, setCity] = useState('New York');
    const [weather, setWeather] = useState(null);
    const [forecast, setForecast] = useState([]);
    const [unit, setUnit] = useState('metric'); // metric for Celsius, imperial for Fahrenheit

    useEffect(() => {
        fetchWeather(city);
    }, [city, unit]);

    const fetchWeather = async (city) => {
        try {
            const weatherData = await getWeatherByCity(city);
            const forecastData = await getFiveDayForecast(city);
            setWeather(weatherData.data);
            setForecast(forecastData.data.list);
        } catch (error) {
            console.error("Error fetching weather data", error);
        }
    };

    const handleUnitToggle = () => {
        setUnit(prevUnit => prevUnit === 'metric' ? 'imperial' : 'metric');
    };

    return (
        <div className="weather-page">
            <CitySearch onCitySelect={setCity} />
            {weather && <WeatherCard weather={weather} unit={unit} />}
            <UnitToggle unit={unit} onToggle={handleUnitToggle} />
            <div className="forecast-container">
                {forecast.map((day, index) => (
                    <ForecastCard key={index} forecast={day} unit={unit} />
                ))}
            </div>
        </div>
    );
};

export default WeatherPage;
