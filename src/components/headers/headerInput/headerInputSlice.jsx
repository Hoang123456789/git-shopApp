
import { createSlice } from "@reduxjs/toolkit";

export default createSlice({
  name: "productFilter",

  initialState: {
    
    data: "",
  },
  reducers: {
    FilterProduct: (state, action) => {
      //  console.log(action.payload);
     
    state.data= action.payload.data;
  
    },
  },
});
