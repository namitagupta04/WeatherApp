import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import { useState } from "react";

export default function WeatherApp(){
  const [weatherInfo, setWeatherInfo] = useState({
    city      : "Delhi",
    feelsLike : 42.05,
    humidity  : 55,
    temp      : 35.05,
    tempMax   : 35.05,
    tempMin   : 35.05,
    weather   : "haze",
  });

  let updateInfo = (newInfo) => {
    setWeatherInfo(newInfo);
  }

  return(
    <div style={{textAlign: "center"}}>
      <h2>Weather App by Namita</h2>
      <SearchBox updateInfo={updateInfo}/>
      <InfoBox info={weatherInfo}/>
    </div>
  )
}