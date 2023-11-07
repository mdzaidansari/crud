import { configureStore } from '@reduxjs/toolkit'
import userDetalSlice from '../features/userDetalSlice'

export const store = configureStore({
  reducer: {
    app:userDetalSlice,
  },
})

//api key
//https://64b1968a062767bc48266afd.mockapi.io/crudapp