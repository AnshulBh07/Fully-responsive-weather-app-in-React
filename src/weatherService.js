import axios from "axios";
import weatherHashmap from "./components/iconSVG";

//this file is used to fetch the data
const apiKey = "ef2cac7d88df4747fedf94053b59b660";

//this variable will store the data
//it will be an object of information
const getWeatherData = async (city, units) => {
  const response = await axios.get(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`
  );

  const result = response.data;

  //destructuring the data to get only what we need
  const {
    weather,
    main: { temp, feels_like, temp_min, temp_max, pressure, humidity },
    wind: { speed },
    sys: { country },
    name,
  } = result;

  //futher destructuring weather
  const { main, description } = weather[0];

  //let's get icons based on weather: {main}, we try doing this using a hashmap to create a dictionary of icons
  const icon = weatherHashmap.get(`${main}`);
  //returning formatted data
  return {
    main,
    description,
    temp,
    icon,
    name,
    feels_like,
    temp_min,
    temp_max,
    pressure,
    humidity,
    speed,
    country,
  };
};

export default getWeatherData;
