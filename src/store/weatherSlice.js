import { createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

const APIKey = "708c105e2d6e0e2c4247044efc5e07a4"



export const fetchWeather = createAsyncThunk('fetchWeather', async (city) => {
    try {
        const cords = await axios.get(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=3&appid=${APIKey}`)
        const answer = cords.data[0]
        const weather = await axios.get(`https://api.openweathermap.org/data/3.0/onecall?lat=${answer.lat}&lon=${answer.lon}&units=imperial&appid=${APIKey}`)
        const response = weather.data
        return response
    } catch (error) {
        throw error
    }
}
)

const initialState = {
    loading: true,
    data: {},
    city:{}

}

const weatherSlice = createSlice({
    name: "weather",
    initialState,
    reducer: {},
    extraReducers: (builder) => {
        builder.addCase(fetchWeather.fulfilled, (state, action) => {
            state.data = action.payload
            state.loading = false
        })
        builder.addCase(fetchWeather.pending, (state) => {
            state.loading = true
        })
        
}
})

export const selectWeather = (state) => {
    return state.weather
}

export const selectCity = (state) => {
    return state.weather.city
}

export default weatherSlice.reducer
