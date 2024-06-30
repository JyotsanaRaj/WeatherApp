import React from "react";
import "./WeatherApp.css";
import SearchBox from "./SearchBox"; // Adjust the path relative to WeatherApp.jsx
import InfoBox from "./InfoBox"; // Adjust the path relative to WeatherApp.jsx
import { useState } from "react";

function WeatherApp() {
    const[weatherInfo,setWeatherInfo]=useState({
        city: "WonerLand",
    feelslike: 24.84,
    temp: 25.05,
    tempMin: 25.05,
    tempMax: 25.05,
    humidity: 47,
    weather: "haze",
    });
    
    let updateInfo=(newInfo)=>{
        setWeatherInfo(newInfo);
    }
  return (
    <div className="WeatherApp">
      <h2>WeatherApp</h2>
      <SearchBox updateInfo={updateInfo} />
      <InfoBox info={weatherInfo}/>
    </div>
  );
}

export default WeatherApp;