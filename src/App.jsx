import { useState } from 'react';
import './App.css';
import SearchBar from './components/SearchBar';

function App() {

  
  const handleSearch = (term)=> {
    console.log("User searched for:", term);
    // later: call geocoding(term) --> weather
  };

  return(
    <div className="app-container">
      <h1>Whats the Weather?</h1>

      <div className="weather-card">
        <div className="weather-box-placeholder"></div>

        <SearchBar onSearch={handleSearch} /> 
      </div>
    </div>
  );
}

export default App;
