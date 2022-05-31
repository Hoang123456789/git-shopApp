import axios from "axios";

export const API_URl_HEROKU = "https://js-post-api.herokuapp.com/api/products";

export const request = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});
export const requestProduct = axios.create({
  baseURL: API_URl_HEROKU,
});
