import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import "./InfoBox.css";

export default function InfoBox({ info, visible }) {
    const weatherToImageMap = {
        clear: "/images/Clear.jpg",
        clouds: "/images/Clouds.jpg",
        rain: "/images/Rain.jpg",
        snow: "/images/Snow.jg",
        haze: "/images/haze.jpg",
        // Add more mappings as needed
    };

    let backgroundImage = weatherToImageMap[info.weather.toLowerCase()] || "https://media.istockphoto.com/id/182355595/photo/clear-sky.webp?b=1&s=170667a&w=0&k=20&c=2QRSStrG1po4oprLpjdM7UO5zbUxg_XZoQPR3FYaYTE=";

    if (!visible) {
        return null;
    }

    return (
        <div className='InfoBox'>
            <div className='cardContainer'>
                <Card sx={{
                    maxWidth: 345,
                    backgroundImage: `url(${backgroundImage})`,
                    backgroundSize: 'cover',
                    color: 'white',
                    backgroundColor: 'rgba(0, 0, 0, 0.5)'
                }}>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {info.city}
                        </Typography>
                        <Typography variant="body2" color="text.secondary" component={"span"}>
                            <p>Temperature = {info.temp}&deg;C</p>
                            <p>Humidity = {info.humidity}&deg;</p>
                            <p>Min Temp = {info.tempMin}&deg;</p>
                            <p>Max Temp = {info.tempMax}&deg;</p>
                            <p>The Weather is described as <i>{info.weather}</i> and feels like {info.feelsLike}&deg;</p>
                        </Typography>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}
