

import { configureStore } from '@reduxjs/toolkit'

import  todoSlice  from './ToDoslice'
import weatherSlice from './weatherSlice'
import openaiSlice from './OpenAiSlice'



// main redux store
const store = configureStore({
  reducer: {
    todo:todoSlice,
    weather:weatherSlice,
    openai:openaiSlice
  },

  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware({
    serializableCheck: {
      ignoredPaths: ['weather.weather.headers'], // Add the path to the non-serializable field here
    },
  }),
})

export default store
