import { configureStore } from "@reduxjs/toolkit";
import headerInputSlice from "../components/headers/headerInput/headerInputSlice";
import ListProductSlice from "../components/ListProduct/ListProductSlice";

import LoginSlice from "../page/loginPage/LoginSlice";
import RegistrationSlice from "../page/registrationPage/RegistrationSlice";
//import createSagaMiddleware from "redux-saga";
//import mySaga from "./sagas/index";
//const sagaMiddleware = createSagaMiddleware();

const store = configureStore(  
  {
    reducer: {
      registrantion: RegistrationSlice.reducer,
      login: LoginSlice.reducer,   
      products: ListProductSlice.reducer,
      FilterProduct:headerInputSlice.reducer
    
    }
    // ,middleware:(getDefaulMiddleware)=>
    // getDefaulMiddleware().concat(sagaMiddleware )
  },

  )
 // sagaMiddleware.run(mySaga);
  
  export default store;
