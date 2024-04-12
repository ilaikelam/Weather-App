import { useEffect, useState } from "react";

import CurrentWeather from "./CurrentWeather";
import { getForecastWeather, getWeather } from "../Api/Api";
import ForecastWeather from "./ForecastWeather";

import styles from "./HomePage.module.css";
import { FadeLoader } from "react-spinners";

function HomePage() {
  const [currentWeather, setCurrentWeather] = useState([]);
  const [forecastWeather, setForecastWeather] = useState([]);
  const [city, setCity] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const get = async () => {
      const res = await fetch(getWeather("tehran"));
      const res2 = await fetch(getForecastWeather("tehran"));
      const json = await res.json();
      const json2 = await res2.json();
      setCurrentWeather(json);
      setForecastWeather(json2);
      setLoading(false);
    };
    get();
  }, []);

  const getCurrentWeather = async () => {
    if (city) {
      const res = await fetch(getWeather(city));
      const res2 = await fetch(getForecastWeather(city));
      const json = await res.json();
      const json2 = await res2.json();
      setCurrentWeather(json);
      setForecastWeather(json2);
      setLoading(false);
      setCity("");
    } else {
      alert("Enter Valid City...");
    }
  };
  return (
    <div>
      <div className={styles.search}>
        <input
          type="text"
          placeholder="Enter city name..."
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button onClick={getCurrentWeather}>search</button>
      </div>
      <div>
        {loading || city ? (
          <div className={styles.loader}>
            <FadeLoader />
          </div>
        ) : (
          <>
            <CurrentWeather currentWeather={currentWeather} />
            <ForecastWeather forecastWeather={forecastWeather} />
          </>
        )}
      </div>
    </div>
  );
}

export default HomePage;
