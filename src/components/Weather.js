import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchWeather, selectWeather } from "../store/weatherSlice";
import WeatherCard from "./WeatherCard";
import WeatherCardDaily from "./WeatherDailyCard";

const Weather = () => {

    const dispatch = useDispatch()
    
    const [city, setCity] = useState('Yonkers')

    useEffect(() => {
        dispatch(fetchWeather(city))
    }, [dispatch, city])

    const weather = useSelector(selectWeather)

    const handleClick = (e) => {
        setCity(e.target.id)
    }

    return (
        <div className="p-6 m-4 h-md w-lg rounded-xl shadow-lg flex space-x-4 bg-primary">
            {weather.loading ? <p>loading</p> : (
                <div>
                    <div className="flex max-w-sm justify-evenly">
                        <h2 id="Yonkers" className="text-xl text-secondary hover:text-ternary focus:text-ternary" onClick={(e) => (handleClick(e))}>Yonkers</h2>
                        <h2 id="Los_Angeles" className="text-xl text-secondary  hover:text-ternary" onClick={(e) => (handleClick(e))}>Los Angeles</h2>
                        <h2 id="Dublin" className="text-xl text-secondary hover:text-ternary" onClick={(e) => (handleClick(e))}>Dublin</h2>
                    </div>
                    <div className="max-w-sm my-5">
                        <h3 className="max-w-sm">{Math.round(weather.data.current.temp)}°F</h3>
                        <h3 className="">Humidty: {weather.data.current.humidity}</h3>
                    </div>
                    <section className=" max-w-sm">
                        <ul className="flex my-3">
                            {weather.data.hourly.slice(1, 6).map((hour) => {
                                return <li key={hour.dt} className="m-2"><WeatherCard hour={hour}/></li>
                            })}
                        </ul>
                        <ul id="hourly-weather" className="flex my-3 ">
                            {weather.data.daily.slice(1, 6).map((day) => {
                                return (
                                    <li key={day.dt} className="m-2 "><WeatherCardDaily day={day} /></li>

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