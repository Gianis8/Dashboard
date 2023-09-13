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
    console.log(data)
    return data
})

const initialState = {
    prompt: "Hi Ian",
    answer: {},
    loading: true
}

export const openAiSlice = createSlice({
    name: "openai",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchChat.fulfilled, (state, action) => {
            console.log("fulffilled")
            console.log(action.payload.data)
            state.answer = action.payload
            state.loading = false
        })
        builder.addCase(fetchChat.pending, (state, action) => {
            console.log("pending")
            state.loading = true
        })
    }
})

export const selectPrompt = (state, action) => {
    return state.prompt
}

export const selectLoading = (state,action) => {
    return state.loading
}

export const selectAnswer = (state, action) => {
    return state.answer
}

export default openAiSlice.reducer