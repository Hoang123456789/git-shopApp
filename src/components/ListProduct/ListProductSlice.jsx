import { createSlice } from "@reduxjs/toolkit";

export default createSlice({
  name: "products",

  initialState: {
      
    id:1

  },
  reducers: {
    products: (state, action) => {
   console.log(action.payload.id);
   
   state.id = action.payload.id
    },
  },
});
