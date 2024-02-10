// App.js
import React, { useState } from 'react';
import './WeatherApp.css';
import WeatherApp from './WeatherApp';
import Dates from './Dates';

function App() {
  const [city, setCity] = useState('');
  const [temp, setTemp] = useState('');
  const [humidity, setHumidity] = useState('');
  const [windSpeed, setWindSpeed] = useState('');
  const [weatherIcon, setWeatherIcon] = useState('');
  const [showWeather, setShowWeather] = useState(false);

  const apiKey = "9bf03420bdd63f9fdd28137dddbb02a4";
  const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

  const checkWeather = async () => {
    try {
      const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
      const data = await response.json();

      setTemp(Math.round(data.main.temp) + "°C");
      setHumidity(data.main.humidity + "%");
      setWindSpeed(data.wind.speed + " km/h");

      if (data.weather[0].main === 'Clouds') {
        setWeatherIcon("Images/clouds.png");
      } else if (data.weather[0].main === 'Rain') {
        setWeatherIcon("Images/rain.png");
      } else if (data.weather[0].main === 'Clear') {
        setWeatherIcon("Images/clear.png");
      } else if (data.weather[0].main === 'Drizzle') {
        setWeatherIcon("Images/drizzle.png");
      } else if (data.weather[0].main === 'Mist') {
        setWeatherIcon("Images/mist.png");
      }

      setShowWeather(true);

    } catch (error) {
      console.error("Error fetching weather data:", error);
      alert("Error fetching weather data. Please try again.");
    }
  };

  return (
    <div className="App">
      <div className="app-container">
        <div className="card">
          <div className="search">
            <input
              type="text"
              placeholder="Enter city name"
              spellCheck="false"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
            <button onClick={() => checkWeather()}>
              <img src="Images/search.png" alt="Search" />
            </button>
          </div>
          <WeatherApp
          city={city}
          temp={temp}
          humidity={humidity}
          windSpeed={windSpeed}
          weatherIcon={weatherIcon}
          showWeather={showWeather}
        />
        <Dates city={city} />
        </div>
      </div>
    </div>
  );
}

export default App;
