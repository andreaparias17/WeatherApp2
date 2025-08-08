import { useState } from 'react';
import './App.css';

function App() {
  return(
    <div className="app-container">
      <h1>Whats the Weather?</h1>

      <div className="weather-card">
        <div className="weather-box-placeholder"></div>

        {/* search bar section */}
        <div classname="search-section">
          <label htmlFor="city-input">Enter City:</label>
          <input id="city-input" type="text" placeholder="City Name"/>
          <button>Search</button>
           </div>
      </div>
    </div>

  )
  
}

export default App;
