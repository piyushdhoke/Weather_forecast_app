import axios from 'axios';

const API_KEY = 'aa035db78cec3f969f77384e944a9d20';
const BASE_URL = 'https://api.openweathermap.org/data/2.5';

export const getWeatherByCity = (city) => {
    return axios.get(`${BASE_URL}/weather?q=${city}&appid=${API_KEY}&units=metric`);
};

export const getFiveDayForecast = (city) => {
    return axios.get(`${BASE_URL}/forecast?q=${city}&appid=${API_KEY}&units=metric`);
};
