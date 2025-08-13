const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;


export async function geocodeLocation(term) {
    const url = `https://api.openweathermap.org/geo/1.0/direct?q=${encodeURIComponent(
    term
  )}&limit=1&appid=${API_KEY}`;

  const res = await fetch(url);
  if (!res.ok) throw new Error("Geocoding request failed");
  const data = await res.json();

  if(!Array(data) || data.lenght === 0){
    throw new Error("Location no valid");
  }

  const {lat, lon} = data[0];
  return{lat, lon};
    
}