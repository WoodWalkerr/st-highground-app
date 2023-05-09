// src/components/Weather.js
import React, { useState, useEffect } from 'react';

const Weather = () => {
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    const API_KEY = 'your_api_key';
    const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=lake_region&appid=${API_KEY}&units=metric`;

    const fetchWeather = async () => {
      try {
        const response = await fetch(API_URL);
        const data = await response.json();
        if (response.ok) {
          setWeather(data);
        } else {
          setError(true);
        }
      } catch (error) {
        setError(true);
      }
    };

    fetchWeather();
  }, []);

  if (error) {
    return <div>Error fetching weather data.</div>;
  }

  if (!weather) {
    return <div>Loading weather...</div>;
  }

  const { name, main, weather: [{ description, icon }] } = weather;

  return (
    <div className="border border-gray-300 p-4 mb-4">
      <h2 className="text-lg font-medium mb-2">Weather in {name}</h2>
      <div className="flex items-center">
        <img
          src={`http://openweathermap.org/img/w/${icon}.png`}
          alt={description}
          className="w-12 h-12 mr-4"
        />
        <div>
          <div className="text-gray-600">{description}</div>
          <div className="text-3xl font-bold">{Math.round(main.temp)}°C</div>
        </div>
      </div>
    </div>
  );
};

export default Weather;
