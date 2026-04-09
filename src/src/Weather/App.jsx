import React, { useState, useEffect } from "react";
import "./App.css"

const API_KEY = "b43da97386082baceb32ee34aad31a62";

function App() {
  const [weather, setWeather] = useState(null);
  const [city, setCity] = useState("Chennai");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchWeatherByCoords = async (lat, lon) => {
    setLoading(true);
    setError("");
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
      );
      const data = await response.json();
      if (data.cod !== 200) throw new Error(data.message);
      setWeather(data);
      setCity(data.name);
    } catch (error) {
      console.error("Error:", error);
      setError("Unable to fetch weather for your location.");
    } finally {
      setLoading(false);
    }
  };

  // 🔹 Get weather by city name
  const fetchWeatherByCity = async () => {
    if (!city.trim()) {
      setError("Please enter a city name");
      return;
    }
    setLoading(true);
    setError("");
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );
      const data = await response.json();
      if (data.cod !== 200) throw new Error(data.message);
      setWeather(data);
      setCity(data.name);
    } catch (error) {
      console.error("Error:", error);
      setError("City not found. Please try again.");
      setWeather(null);
    } finally {
      setLoading(false);
    }
  };

  // 🔹 Get user location on mount
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          fetchWeatherByCoords(
            position.coords.latitude,
            position.coords.longitude
          );
        },
        (error) => {
          console.log("Location permission denied, using default city");
          fetchWeatherByCity();
        }
      );
    } else {
      fetchWeatherByCity();
    }
  }, []);

  const handleKeyPress = (e) => {
    if (e.key === "Enter") fetchWeatherByCity();
  };

  const getWeatherIconUrl = (iconCode) => {
    return `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
  };

  return (
    <div className="app-container">
      <div className="weather-card">
        <h1 className="title">
          <span className="title-icon">🌤️</span> Weather App
        </h1>

        <div className="search-container">
          <input
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Enter city name..."
            className="city-input"
          />
          <button onClick={fetchWeatherByCity} className="search-btn" disabled={loading}>
            {loading ? "⏳" : "🔍"} Search
          </button>
        </div>

        <button onClick={() => fetchWeatherByCoords()} className="location-btn">
          📍 Use My Location
        </button>

        {error && <div className="error-message">{error}</div>}

        {loading && (
          <div className="loading">
            <div className="spinner"></div>
            <p>Fetching weather...</p>
          </div>
        )}

        {weather && !loading && (
          <div className="weather-info">
            <div className="weather-header">
              <h2 className="city-name">{weather.name}</h2>
              <img
                src={getWeatherIconUrl(weather.weather[0].icon)}
                alt={weather.weather[0].description}
                className="weather-icon"
              />
            </div>
            <div className="temperature">
              {Math.round(weather.main.temp)}°C
            </div>
            <div className="condition">
              {weather.weather[0].description}
            </div>

            <div className="details-grid">
              <div className="detail-item">
                <span className="detail-label">🌡️ Feels Like</span>
                <span className="detail-value">{Math.round(weather.main.feels_like)}°C</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">💧 Humidity</span>
                <span className="detail-value">{weather.main.humidity}%</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">💨 Wind Speed</span>
                <span className="detail-value">{(weather.wind.speed * 3.6).toFixed(1)} km/h</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">📊 Pressure</span>
                <span className="detail-value">{weather.main.pressure} hPa</span>
              </div>
            </div>

            <div className="extra-details">
              <div className="extra-item">
                🌅 Sunrise: {new Date(weather.sys.sunrise * 1000).toLocaleTimeString()}
              </div>
              <div className="extra-item">
                🌇 Sunset: {new Date(weather.sys.sunset * 1000).toLocaleTimeString()}
              </div>
            </div>
          </div>
        )}
      </div>
      <link
        href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap"
        rel="stylesheet"
      />
    </div>
  );
}

export default App;
