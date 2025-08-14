import { useState } from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import WeatherCard from './components/WeatherCard.jsx';
import { geocodeLocation } from './utils/geocodeLocation';
import { fetchWeather } from './utils/fetchWeather';



function App() {

  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("")
;

const handleSearch = async (term) => {
  try {
    setLoading(true);
    setError("");
    setWeatherData(null);

    console.log("Searching for:", term);

    const { lat, lon } = await geocodeLocation(term);
    console.log("Coordinates found:", lat, lon);

    const data = await fetchWeather(lat, lon);
    console.log("Weather data:", data);

    setWeatherData(data);
  } catch (err) {
    console.error("Error during search:", err);
    setError("Could not fetch weather. Try another location.");
  } finally {
    setLoading(false);
  }
};

return (
  <div className="landing-shell">
    <div className="landing-card card">
      <h3 className="app-title">Whats the Weather?</h3>

    
      <img className="hero-art" src="public/sunhero.png" alt="weather icon" />

      <h2 className="tagline">Enter City Name:</h2>

      
      <SearchBar onSearch={handleSearch} />
    </div>

  
    {weatherData && <WeatherCard data={weatherData} />}
    

    {loading && <p className="status">Loading…</p>}
    {error && <p className="status error">{error}</p>}
  </div>
);

}

export default App;
