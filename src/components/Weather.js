import React, {useEffect, useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchWeather, selectWeather } from "../store/weatherSlice";
import WeatherCard from "./WeatherCard";
import WeatherCardDaily from "./WeatherDailyCard";

const Weather = () => {

    const dispatch = useDispatch()
    const [city, setCity] = useState('Yonkers')

    useEffect(()=>{
        dispatch(fetchWeather(city))
    },[dispatch, city])

    const weather = useSelector(selectWeather)
    
    const [selected, setSelected] = useState("")
    



    const handleClick = (e) => {
        setSelected(e.target.innerText)
        setCity(e.target.id)
        console.log(e.target.id)

    }

    

    
    
    
    return (
            <div id="weather-widget">
                {weather.loading ? <p>loading</p> : (
                <div>
                    <div id="cities">
                        <h2 id="Yonkers" className={selected === "Yonkers" ? "h2selected" : "h2weather"} onClick={(e)=>(handleClick(e))}>Yonkers</h2>
                        <h2 id="Los_Angeles"className={selected === "Los Angeles" ? "h2selected" : "h2weather"} onClick={(e)=>(handleClick(e))}>Los Angeles</h2>
                        <h2 id="Dublin" className={selected === "Dublin" ? "h2selected" : "h2weather"}  onClick={(e)=>(handleClick(e))}>Dublin</h2>
                    </div>
                    <h2>{Math.round(weather.data.current.temp)}°F</h2>
                    <h3>Humidty: {weather.data.current.humidity}</h3>
                    <section>
                        <ul id="hourly-weather">
                            {weather.data.hourly.slice(1,6).map((hour)=>{
                                return <li key={hour.dt}><WeatherCard hour={hour}/></li>
                            })}
                        </ul>
                        <ul id="hourly-weather">
                            {weather.data.daily.slice(1,6).map((day)=>{
                                return (
                                <li key={day.dt}><WeatherCardDaily day={day} /></li>
                                
                                )
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