import React from "react";

const WeatherCard = (props) => {
    const hour = props.hour
    console.log(hour)

 
   
    const date = new Date(props.hour.dt * 1000 )

    const options = {
        hour:'numeric',
        minute:'numeric',
        timeZone:"America/New_York"
    }
    const displayHour = new Intl.DateTimeFormat('en-US', options).format(date)
    
    return(
        <div>
            <h3>{displayHour}</h3>
            <h3>{Math.round(hour.feels_like)}°F</h3>
        </div>
    )
}

export default WeatherCard