import React, { useState } from "react";
import axios from "axios";
import "./styles.css";

export default function WeatherApp() {
  let [city, setCity] = useState("");
  let [message1, setMessage1] = useState("");
  let [message2, setMessage2] = useState("");
  let [message3, setMessage3] = useState("");
  let [message4, setMessage4] = useState("");

  function showTemperature(response) {
    console.log(response);
    setMessage1(`Temperature: ${Math.round(response.data.main.temp)}°C `);
    setMessage2(`Description: ${response.data.weather[0].description}`);
    setMessage3(`Humidity: ${Math.round(response.data.main.humidity)}%`);
    setMessage4(`Wind: ${Math.round(response.data.wind.speed)}Km/h`);
  }
  function updateCity(event) {
    setCity(event.target.value);
  }
  function handleSubmit(event) {
    event.preventDefault();
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=40c070457645a25e3aed4a4bf9319268&units=metric`;
    axios.get(url).then(showTemperature);
  }
  return (
    <div className="SearchEngine">
      <h1>Weather App</h1>
      <form onSubmit={handleSubmit}>
        {" "}
        <input type="text" placeholder="Type a city" onChange={updateCity} />
        <input type="submit" value="Search" />
      </form>
      <p>{message1}</p>
      <p>{message2}</p>
      <p>{message3}</p>
      <p>{message4}</p>
    </div>
  );
}
