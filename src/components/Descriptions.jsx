import React from "react";
import Card from "./Cards.jsx";
import weatherHashmap from "./iconSVG.js";

const Descriptions = (props) => {
  const descIcons = [
    {
      id: 1,
      wticon: weatherHashmap.get("TempDown"),
      title: "Min",
      val: `${props.minTemp.toFixed()} °${props.unit}`,
    },
    {
      id: 2,
      wticon: weatherHashmap.get("TempUp"),
      title: "Max",
      val: `${props.maxTemp.toFixed()} °${props.unit}`,
    },
    {
      id: 3,
      wticon: weatherHashmap.get("FeelsLike"),
      title: "Feels like",
      val: `${props.feels.toFixed()} °${props.unit}`,
    },
    {
      id: 4,
      wticon: weatherHashmap.get("Pressure"),
      title: "Pressure",
      val: `${props.pressure} hPa`,
    },
    {
      id: 5,
      wticon: weatherHashmap.get("Humidity"),
      title: "Humidity",
      val: `${props.humidity} %`,
    },
    {
      id: 6,
      wticon: weatherHashmap.get("WindSpeed"),
      title: "Wind Speed",
      val: `${props.windspeed} m/h`,
    },
  ];

  //function used for mapping callback
  function getCards(cd) {
    return (
      <Card key={cd.id} icon={cd.wticon} cardTitle={cd.title} value={cd.val} />
    );
  }

  return (
    <div className="desc__container">
      {descIcons.map(getCards)}
      {/* <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card /> */}
    </div>
  );
};

export default Descriptions;
