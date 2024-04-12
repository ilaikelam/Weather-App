const BASE_URL = `https://api.openweathermap.org/data/2.5`;
const API_KEY = "396d93029f5836f58868551467e87596";

const getWeather = (city) => {
  return `${BASE_URL}/weather?q=${city}&appid=${API_KEY}&units=metric`;
};
const getForecastWeather = (city) => {
  return `${BASE_URL}/forecast?q=${city}&appid=${API_KEY}&units=metric`;
};

export { getWeather, getForecastWeather };
