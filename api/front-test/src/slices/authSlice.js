import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isAuth: false,
    user: null
  },
  reducers: {
    isAuth: (state) => {
      return state.isAuth
    },
    setAuth: (state) => {
      state.isAuth = true
    },
    deleteAuth: (state) => {
      state.isAuth = false
    }
  }
})

export const { isAuth, setAuth, deleteAuth } = authSlice.actions;
export default authSlice.reducer;
