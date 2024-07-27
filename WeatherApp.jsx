import React, { useState } from 'react';
import SearchBox from './SearchBox';
import InfoBox from './InfoBox';
import './WeatherApp.css'; // Ensure this CSS file is created

export default function WeatherApp() {
    const [weatherInfo, setWeatherInfo] = useState({
        city: "Pune",
        feelsLike: 24.84,
        temp: 25.05,
        tempMin: 25.05,
        tempMax: 30.0,
        humidity: 47,
        weather: "haze"
    });
    const [visible, setVisible] = useState(false);

    const weatherToImageMap = {
        clear: "/images/Clear.jpg",
        clouds: "/images/Clouds.jpg",
        rain: "/images/Rain.jpg",
        snow: "/images/Snow.jg",
        haze: "/images/haze.jpg",
        // Add more mappings as needed
    };


    let backgroundImage = weatherToImageMap[weatherInfo.weather.toLowerCase()] || "/images/Clouds.jpg";

    let updateInfo = (newInfo) => {
        setWeatherInfo(newInfo);
        setVisible(true);
    }

    return (
        <div style={{
            textAlign: "center",
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: 'cover',
            height: '100vh',
            color: 'white'
        }}>
            <h1>Weather App</h1>
            <SearchBox updateInfo={updateInfo} />
            <InfoBox info={weatherInfo} visible={visible} />
        </div>
    )
}
