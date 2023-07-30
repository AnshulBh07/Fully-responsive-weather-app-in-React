import { useEffect, useState } from "react";
import bgHashmap from "./bgimages";
import Descriptions from "./Descriptions";
import UserInput from "./UserInput";
import CurrentWeather from "./CurrentWeather";
import getWeatherData from "../weatherService";

function App() {
  //useState hooks to set data
  const [weather, setWeather] = useState(null);
  const [units, setUnits] = useState("metric");
  const [city, setCity] = useState("Delhi");
  const [bg, setbg] = useState(bgHashmap.get("Clear"));

  //fucntions to set units
  function handleInputCity(value) {
    console.log(value);
    setCity(value);
    console.log(city);
  }

  const handleUnits = (value) => {
    value === "C" ? setUnits("metric") : setUnits("imperial");
  };
  //we will sue useEffect hook; this hook is used to add side effects
  //side effects like fecthing data, updating DOM
  //basically whenever a change in UI is done this will be triggered
  useEffect(() => {
    //we will create a funtion async in nature that will get data
    async function fetchCurrData() {
      const currWeather = await getWeatherData(city, units);
      console.log(currWeather);
      setWeather(currWeather);

      setbg(bgHashmap.get(currWeather.main));
    }

    fetchCurrData();
  }, [units, city]);

  return (
    <div
      className="app"
      style={{
        backgroundImage: `url(${bg})`,
      }}
    >
      <div className="overlay">
        {weather && (
          <div className="container">
            <UserInput
              parentCall={handleInputCity}
              parentBtnClick={handleUnits}
            />
            <CurrentWeather
              country={weather.country}
              main={weather.main}
              city={weather.name}
              temp={weather.temp.toFixed()}
              unit={units === "metric" ? "C" : "F"}
              desc={weather.description}
            />
            <Descriptions
              minTemp={weather.temp_min}
              maxTemp={weather.temp_max}
              feels={weather.feels_like}
              pressure={weather.pressure}
              humidity={weather.humidity}
              windspeed={weather.speed}
              unit={units === "metric" ? "C" : "F"}
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
