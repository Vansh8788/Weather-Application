import { useState } from "react";
import axios from "axios";

function App() {

  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(false);

  const getWeather = async () => {

    const res = await axios.get(
      `https://weather-backend.onrender.com/weather/${city}`
    );

    setWeather(res.data);
  };

  return (
    <div className="container">

      <h1>Weather Forecast</h1>

      <input
        type="text"
        placeholder="Enter city"
        onChange={(e) => setCity(e.target.value)}
      />

      <button onClick={getWeather}>
        Search
      </button>

      {weather && (
        <div>
          <h2>{weather.name}</h2>
          <h3>{weather.main.temp}°C</h3>
          <p>{weather.weather[0].description}</p>
          <p>Humidity: {weather.main.humidity}%</p>
          <p>Wind: {weather.wind.speed} km/h</p>
        </div>
      )}
    </div>
  );
}

export default App;