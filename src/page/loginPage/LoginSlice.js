import { createSlice } from "@reduxjs/toolkit";

export default createSlice({
  name: "login",

  initialState: {
    FirtsName: "",
    Password: "",
  },
  reducers: {
    loginText: (state, action) => {
     
      state.FirtsName = action.payload.UserName;
      state.Password = action.payload.Passwork;   
    },
  },
});
