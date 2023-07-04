import React from "react";

const WeatherCardDaily = (props) => {

    const day = props.day
    const UTCdate = new Date( day.dt*1000 )

    const options = {
        weekday: "long",
        timeZone: "America/New_York"
    }
    const displayDay = new Intl.DateTimeFormat('en-US', options).format(UTCdate)

    return (
        <div>
            <h3>{displayDay}</h3>
            <h3>{Math.round(day.temp.day)}°F</h3>
        </div>
    )
}

export default WeatherCardDaily