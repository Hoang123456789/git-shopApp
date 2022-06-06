import { configureStore } from "@reduxjs/toolkit";
import headerInputSlice from "../components/headers/headerInput/headerInputSlice";
import { todoSlice } from "../components/ListProduct/ListProductSlice";

import LoginSlice from "../pages/loginPage/LoginSlice";
import RegistrationSlice from "../pages/registrationPage/RegistrationSlice";

const store = configureStore({
  reducer: {
    registrantion: RegistrationSlice.reducer,
    login: LoginSlice.reducer,
    products: todoSlice.reducer,
    FilterProduct: headerInputSlice.reducer,
  },
});

export default store;
