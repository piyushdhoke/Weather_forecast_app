import React, { useState } from 'react';
import "./style.css"

const CitySearch = ({ onCitySelect }) => {
    const [city, setCity] = useState('');

    const handleSearch = () => {
        onCitySelect(city);
        setCity('');
    };

    return (
        <div className="city-search">
            <input 
                type="text" 
                value={city} 
                onChange={(e) => setCity(e.target.value)} 
                placeholder="Enter city" 
            />
            <button onClick={handleSearch}>Search</button>
        </div>
    );
};

export default CitySearch;
