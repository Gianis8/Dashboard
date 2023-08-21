import React from "react";

const WeatherCard = (props) => {
    const hour = props.hour
    const date = new Date(props.hour.dt * 1000 )

    const options = {
        hour:'numeric',
        timeZone:"America/New_York"
    }
    const displayHour = new Intl.DateTimeFormat('en-US', options).format(date)
    
    return(
        <div className="fl">
            <h3>{displayHour}</h3>
            <h3>{Math.round(hour.feels_like * 10)/10}°F</h3>
        </div>
    )
}

export default WeatherCard