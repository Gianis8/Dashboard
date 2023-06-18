import React, {useEffect, useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchWeather, selectWeather, fetchGeocoding } from "../store/weatherSlice";
import WeatherCard from "./WeatherCard";
import WeatherCardDaily from "./WeatherDailyCard";

const Weather = () => {

    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(fetchWeather())
    },[dispatch])

    
    const [selected, setSelected] = useState("")
   

    const handleClick = (e) => {
        setSelected(e.target.innerText)
        dispatch(fetchGeocoding())
        console.log(e.target.innerText)
        console.log(e.target.className)
    }

    

    
    
    const weather = useSelector(selectWeather)
    return (
            <div id="weather-widget">
                {weather.loading ? <p>loading</p> : (
                <div>
                    <div id="cities">
                        <h2 className={selected === "Westchester" ? "h2selected" : "h2weather"} onClick={(e)=>(handleClick(e))}>Westchester</h2>
                        <h2 className={selected === "Los Angeles" ? "h2selected" : "h2weather"} onClick={(e)=>(handleClick(e))}>Los Angeles</h2>
                        <h2 className={selected === "Wilmington" ? "h2selected" : "h2weather"}  onClick={(e)=>(handleClick(e))}>Wilmington</h2>
                    </div>
                    <h2>{Math.round(weather.data.current.temp)}°F</h2>
                    <h3>Humidty: {weather.data.current.humidity}</h3>
                    <section>
                        <ul id="hourly-weather">
                            {weather.data.hourly.slice(1,6).map((hour)=>{
                                return <WeatherCard hour={hour}/>
                            })}
                        </ul>
                        <ul id="hourly-weather">
                            {weather.data.daily.slice(1,5).map((day)=>{
                                return <WeatherCardDaily day={day} />
                            })}
                        </ul>
                    </section>
                   
                </div>
                )
                }
            </div>
        
    )
}

export default Weather