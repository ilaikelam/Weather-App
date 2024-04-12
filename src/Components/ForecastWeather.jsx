import styles from "./ForecastWeather.module.css"

function ForecastWeather({ forecastWeather }) {
  const DAYS = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const data = forecastWeather.list.filter((obj) =>
    obj.dt_txt.endsWith("12:00:00")
  );

  return (
    <div className={styles.container}>
      {data.map((i) => (
        <div key={i.dt} className={styles.item}>
          <img
            src={`https://openweathermap.org/img/w/${i.weather[0].icon}.png`}
          />

          <h3>{DAYS[new Date(i.dt * 1000).getDay()]}</h3>
          <p>{Math.round(i.main.temp)} C</p>
          <span>{i.weather[0].main}</span>
        </div>
      ))}
    </div>
  );
}

export default ForecastWeather;
