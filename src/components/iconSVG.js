//svg are xml written images and they can be treated as individual react components
import IconClearDay from "../assets/images/icons/clear-day.svg";
import IconTempDown from "../assets/images/icons/thermometer-colder.svg";
import IconTempUp from "../assets/images/icons/thermometer-warmer.svg";
import IconFeelsLike from "../assets/images/icons/thermometer.svg";
import IconPressure from "../assets/images/icons/pressure-high.svg";
import IconHumidity from "../assets/images/icons/humidity.svg";
import IconWindSpeed from "../assets/images//icons/wind.svg";
import IconThunderstorm from "../assets/images/icons/thunderstorms.svg";
import IconDrizzle from "../assets/images/icons/drizzle.svg";
import IconRain from "../assets/images/icons/rain.svg";
import IconSnow from "../assets/images/icons/snow.svg";
import IconMist from "../assets/images/icons/mist.svg";
import IconSmoke from "../assets/images/icons/smoke.svg";
import IconHaze from "../assets/images/icons/haze.svg";
import IconDust from "../assets/images/icons/dust-wind.svg";
import IconAsh from "../assets/images/icons/smoke-particles.svg";
import IconTornado from "../assets/images/icons/tornado.svg";
import IconSquall from "../assets/images/icons/sleet.svg";
import IconClouds from "../assets/images/icons/cloudy.svg";
import IconSand from "../assets/images/icons/dust-wind.svg";
import IconFog from "../assets/images/icons/fog.svg";

const myIcons = {
  IconClearDay,
  IconFeelsLike,
  IconHumidity,
  IconPressure,
  IconTempDown,
  IconTempUp,
  IconWindSpeed,
  IconAsh,
  IconDrizzle,
  IconDust,
  IconHaze,
  IconMist,
  IconRain,
  IconSmoke,
  IconSnow,
  IconTornado,
  IconSquall,
  IconThunderstorm,
  IconClouds,
  IconSand,
  IconFog,
};

//now creating a hashmap to map all the icons with their descriptions as per API
const weatherHashmap = new Map([
  ["Clear", myIcons.IconClearDay],
  ["Thunderstorm", myIcons.IconThunderstorm],
  ["Rain", myIcons.IconRain],
  ["Drizzle", myIcons.IconDrizzle],
  ["Snow", myIcons.IconSnow],
  ["Smoke", myIcons.IconSmoke],
  ["Mist", myIcons.IconMist],
  ["Haze", myIcons.IconHaze],
  ["Dust", myIcons.IconDust],
  ["Fog", myIcons.IconFog],
  ["Ash", myIcons.IconAsh],
  ["Squall", myIcons.IconSquall],
  ["Tornado", myIcons.IconTornado],
  ["Clouds", myIcons.IconClouds],
  ["Sand", myIcons.IconSand],
  ["TempUp", myIcons.IconTempUp],
  ["TempDown", myIcons.IconTempDown],
  ["FeelsLike", myIcons.IconFeelsLike],
  ["Pressure", myIcons.IconPressure],
  ["Humidity", myIcons.IconHumidity],
  ["WindSpeed", myIcons.IconWindSpeed],
]);

export default weatherHashmap;
