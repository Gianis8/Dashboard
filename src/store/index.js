

import { configureStore } from '@reduxjs/toolkit'

import  todoSlice  from './ToDoslice'
import weatherSlice from './weatherSlice'



// main redux store
const store = configureStore({
  reducer: {
    todo:todoSlice,
    weather:weatherSlice
  },
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware({
    serializableCheck: {
      ignoredPaths: ['weather.weather.headers'], // Add the path to the non-serializable field here
    },
  }),
})

export default store
