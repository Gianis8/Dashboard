import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchChat = createAsyncThunk("fetchChat", async (prompt) => {


    const { data } = await axios({
        method: "post",
        url: "http://localhost:5000/chat",
        data: {
            prompt: `${prompt}`,
        }

    })
    const response = data
    console.log(response)
    return { ...response }
})

const initialState = {
    prompt: "Hi Ian",
    answer: {}
}

const openaiSlice = createSlice({
    name: "openai",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchChat.fulfilled, (state, action) => {
            console.log("fulffilled")
            console.log(action.payload.data)
            state.answer = action.payload
        })
        builder.addCase(fetchChat.pending, (state, action) => {
            console.log("pending")
        })
    }
})

export const selectPrompt = (state, action) => {
    return state.prompt
}

export const selectAnswer = (state, action) => {
    return state.answer
}

export default openaiSlice