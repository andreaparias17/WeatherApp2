import { formatLocalTime } from "../utils/format";
import { WiSunset, WiHumidity, WiStrongWind, WiBarometer } from "react-icons/wi";

function WeatherCard({ data }) {
  
  const {
    name,
    sys = {},
    main = {},
    wind = {},
    weather = [],
    timezone = 0,        
  } = data;

  const description = weather[0]?.description ?? "";
  const icon = weather[0]?.icon; 
  const iconUrl = icon
    ? `https://openweathermap.org/img/wn/${icon}@2x.png`
    : null;

  
  const temp = main.temp != null ? Math.round(main.temp) : null;
  const humidity = main.humidity;           
  const pressure = main.pressure;           
  const windMph = wind.speed != null ? Math.round(wind.speed) : null; 
  const sunset = sys.sunset ? formatLocalTime(sys.sunset, timezone) : null;

  return (
    <section className="card">
      <h3 className="app-title">Current Weather</h3>

      <div className="top-row">
        <div className="temp-desc">
          <div className="temp">
            {temp != null ? `${temp}°F` : "--"}
            <span className="divider"> | </span>
            <span className="desc">
              {description ? capitalize(description) : "—"}
            </span>
          </div>
        </div>
        {iconUrl && <img className="wx-icon" src={iconUrl} alt={description} />}
      </div>

        <h2 className="place">
            {name}{sys.country ? `, ${sys.country}` : ""}
        </h2>

        <h4 className="section-title">Weather Details</h4>
        <div className="details-grid">
            <Detail label="Sunset"   value={sunset ?? "--:--"}                icon={<WiSunset size={32} />} />
            <Detail label="Humidity" value={humidity != null ? `${humidity}%` : "--"} icon={<WiHumidity size={32} />} />
            <Detail label="Wind"     value={windMph != null ? `${windMph} mph` : "--"} icon={<WiStrongWind size={32} />} />
            <Detail label="Pressure" value={pressure != null ? `${pressure} hPa` : "--"} icon={<WiBarometer size={32} />} />
            </div>
     </section>
  );
}


function Detail({ label, value, icon }) {
  return (
    <div className="detail">
      <div className="emoji">{icon}</div>
      <div className="meta">
        <div className="value">{value}</div>
        <div className="label">{label}</div>
      </div>
    </div>
  );
}



function capitalize(s = "") {
  return s.charAt(0).toUpperCase() + s.slice(1);
}

export default WeatherCard;
