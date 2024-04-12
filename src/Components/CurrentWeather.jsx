import styles from "./CurrentWeather.module.css";

function CurrentWeather({ currentWeather }) {
  return (
    <div className={styles.weather}>
      <h1>
        {currentWeather.name}, {currentWeather.sys.country}
      </h1>
      <div className={styles.main}>
        <img
          src={`https://openweathermap.org/img/w/${currentWeather.weather[0].icon}.png`}
        />
        <span>{currentWeather.weather[0].main}</span>
        <p>{Math.round(currentWeather.main.temp)}</p>
      </div>
      <div className={styles.info}>
        <p>
          Humidity: <span>{currentWeather.main.humidity}</span> %
        </p>
        <p>
          Wind Speed: <span>{currentWeather.wind.speed}</span> %
        </p>
      </div>
    </div>
  );
}

export default CurrentWeather;
