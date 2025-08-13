const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;


export async function fetchWeather(lat, lon){
    const url =  `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=imperial`;

    const res = await fetch(url);
    if (!res.ok) throw new Error("Weather request failed");
    return res.json();

}