import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


//import axios from "axios";

export const todoSlice = createSlice({
  name: "products",
  initialState: {
    id: 1,
    images: "",
    name: "",
    price: 0,
    shortDescription: "",
    salePrice: 0,
    isFreeShip: false,
  },
  reducers: {
    products: (state, action) => {
      console.log(action);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getProducts.pending, (state, action) => {
        console.log(action, "đang chờ");
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        console.log(action.payload, "thành công");
        action.payload.map((res) => {
          state.id = res.id;
          state.images = res.images[0];
          state.name = res.name;
          state.price = res.originalPrice;
          state.salePrice = res.salePrice;
          state.isFreeShip = res.isFreeShip;
          state.shortDescription = res.shortDescription;
          return res;
        });
      })
      .addCase(getProducts.rejected, (state, action) => {
        console.log(action, "thất bại");
      });
  },
});

export const getProducts = createAsyncThunk(
  "products/getProducts",
  async (todo) => {
    const res = await fetch(
      `https://js-post-api.herokuapp.com/api/products?id=${todo.id}`
    );
    const data = await res.json();

    return data;
  }
);
