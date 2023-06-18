import { createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

const APIKey = "708c105e2d6e0e2c4247044efc5e07a4"

export const fetchGeocoding = createAsyncThunk('fetchGeocoding', async(city) =>{
    try {
        const cords = await axios.get(`http://api.openweathermap.org/geo/1.0/direct?q=Yonkers&limit=3&appid=${APIKey}`)
        const answer = cords.data
        console.log(answer)
        return answer
    } catch (error) {
        console.log(error)
    }
})

export const fetchWeather = createAsyncThunk('fetchWeather', async () => {
    try {
        const weather = await axios.get(`https://api.openweathermap.org/data/3.0/onecall?lat=40.94&lon=-73.83&units=imperial&appid=${APIKey}`)
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
    cords:{}

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
        builder.addCase(fetchGeocoding.fulfilled, (state, action) => {
            state.cord = action.payload
            state.loading = false
        })
        builder.addCase(fetchGeocoding.pending, (state, action) => {
            state.loading = true
    })
}
})

export const selectWeather = (state) => {
    return state.weather
}

export const selectCords = (state) => {
    return state.weather.cords
}

export default weatherSlice.reducer
