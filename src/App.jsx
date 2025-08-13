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

// const handleSearch = async (term)=> {
//     try{
//       setLoading(true);
//       setError("");
//       setWeatherData(null);

//       const {lat, lon} = await geocodeLocation(term);

//       const data = await fetchWeather(lat, lon);

//       setWeatherData(data);
//     }catch (err){
//       console.error(err);
//       setError("Could not fetch Weather. Try another location.");
//     }finally{
//       setLoading(false);
//     }
//   };

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


  return(
    <div className="app-container">
      <h1>Whats the Weather?</h1>

      <div className="weather-card">
        


        <div className="weather-box-placeholder"></div>

        <SearchBar onSearch={handleSearch} />
        {loading && <p>Loading..</p>} 
        {error && <p className="error">{error}</p>}
        {weatherData ? (
          <WeatherCard data={weatherData}/>
        
        ) : ( <div className="weather-box-placeholder"></div>)}

      </div>
    </div>
  );
}

export default App;
