import { configureStore } from '@reduxjs/toolkit'
import LoginSlice from './slice/loginSlice/loginSlice'

export const store = configureStore({
  reducer:{
    login: LoginSlice,
},
})