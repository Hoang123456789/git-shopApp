import { createSlice } from "@reduxjs/toolkit";

export default createSlice({
  name: "registrantion",

  initialState: {
    UserName: "",
    Email: "",
    Password: "",
    Passwords: "",
  },
  reducers: {
    registrantionText: (state, action) => {
      console.log(state);
      //console.log(action.payload);
      state.UserName = action.payload.UserName;
      state.Email = action.payload.Email;
      state.Password = action.payload.Password;
      state.Passwords = action.payload.Passwords;
    },
  },
});

