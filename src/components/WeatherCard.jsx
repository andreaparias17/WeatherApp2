function WeatherCard({data}){
    const {
        name,
        sys = {},
        main = {},
        weather = [],
    } = data;


    return(
        <section className="weather-info">
            <h2>
                {name}{sys.country ? `,${sys.country}` : ""}
            </h2>
            <p>
                {Math.round(main.temp)}°F — {weather[0]?.description}
            </p>
        </section>

    )
}

export default WeatherCard;