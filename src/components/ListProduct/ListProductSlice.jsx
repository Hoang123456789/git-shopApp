import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

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
    },
  },
});

export function getProducts(todo) {
  return function getProductsThunk(dispatch, getState) {
    axios({
      method: "GET",
      url: `https://js-post-api.herokuapp.com/api/products?id=${todo.id}`,
      data: null,
    })
      .then((res) => {
        dispatch(todoSlice.actions.products(res.data));
      })
      .catch((err) => {
        console.log(err);
      });

    dispatch();
  };
}
