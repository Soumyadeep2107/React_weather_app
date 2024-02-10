// WeatherApp.js
import React from 'react';

const WeatherApp = ({ city, temp, humidity, windSpeed, weatherIcon, showWeather }) => {
  return (
    <div className="card">
      {showWeather && (
        <div className="weather">
          <div className="item">
            <img src={weatherIcon} className="weather-icon" alt="Weather Icon" />
            <small id="date">10:36 - Tuesday, 5 Oct '23</small>
          </div>
          <h1 className="temp">{temp}</h1>
          <h2 className="city">{city}</h2>
          <div className="details">
            <div className="col">
              <img src="images/humidity.png" alt="Humidity Icon" />
              <div>
                <p className="humidity">{humidity}</p>
                <p>Humidity</p>
              </div>
            </div>
            <div className="col">
              <img src="images/wind.png" alt="Wind Icon" />
              <div>
                <p className="wind">{windSpeed}</p>
                <p>Wind Speed</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default WeatherApp;
