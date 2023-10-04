import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  user : {
    jwt : "",
    email:"",
    userId:"",
    name:""
  }
}

export const LoginSlice= createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state,action) => {
        state.user.jwt = action.payload.jwt;
        state.user.email = action.payload.email
        state.user.userId = action.payload.userId
        state.user.name = action.payload.name

        localStorage.setItem('user',JSON.stringify(state.user));

    },
    logout:(state)=>{
       state.user.jwt = ""
        state.user.email = ""
        state.user.userId = ""
        state.user.name = ""
      localStorage.removeItem('user');
      localStorage.removeItem('reduxState')
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
export const { login,logout, decrement, incrementByAmount } = LoginSlice.actions

export default LoginSlice.reducer