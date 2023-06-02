import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  user : {
    jwt : "",
    email:"",
    password:""
  }
}

export const LoginSlice= createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state,action) => {
        state.user.jwt = action.payload.jwt;
        state.user.email = action.payload.email
        state.user.password = action.payload.password
    },
    decrement: (state) => {
      state.value -= 1
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { login, decrement, incrementByAmount } = LoginSlice.actions

export default LoginSlice.reducer