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
            console.log('returned from thunk:',action.payload.data.choices[0].message.content)
            state.answer = action.payload.data.choices[0].message.content
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

export const selectLoading = (state, action) => {
    return state.openai.loading
}

export const selectAnswer = (state, action) => {
    console.log(state.openai.answer)
    return state.openai.answer
}

export default openAiSlice.reducer