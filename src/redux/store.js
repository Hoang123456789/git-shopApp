import { configureStore , isAsyncThunkAction} from "@reduxjs/toolkit";
import headerInputSlice from "../components/headers/headerInput/headerInputSlice";
import {todoSlice} from "../components/ListProduct/ListProductSlice";
import { applyMiddleware } from 'redux'
import LoginSlice from "../page/loginPage/LoginSlice";
import RegistrationSlice from "../page/registrationPage/RegistrationSlice";


//import createSagaMiddleware from "redux-saga";
//import mySaga from "./sagas/index";
//const sagaMiddleware = createSagaMiddleware();
const middlewareEnhancer = applyMiddleware(isAsyncThunkAction)
const store = configureStore(  
  {
    reducer: {
      registrantion: RegistrationSlice.reducer,
      login: LoginSlice.reducer,   
      products: todoSlice.reducer,
      FilterProduct:headerInputSlice.reducer
    
    }, middlewareEnhancer
    // ,middleware:(getDefaulMiddleware)=>
    // getDefaulMiddleware().concat(thunkMiddleware)
  },
  
  )
 // sagaMiddleware.run(mySaga);
  
  export default store;
