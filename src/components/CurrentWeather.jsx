import React from "react";
import weatherHashmap from "./iconSVG";

const CurrentWeather = (props) => {
  return (
    <React.Fragment>
      <div className="section section_temperature">
        <div className="desc">
          <img src={weatherHashmap.get(`${props.main}`)} alt="clear day" />
          <h3>{props.desc}</h3>
        </div>
        <div className="temp">
          <h4>
            {props.city}, {props.country}
          </h4>
          <h1>
            {props.temp} °{props.unit}
          </h1>
        </div>
      </div>
    </React.Fragment>
  );
};

export default CurrentWeather;
