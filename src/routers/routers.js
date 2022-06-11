import { Route, Routes } from "react-router-dom";
import BuyProduct from "../pages/buying/buying";
import Buying from "../pages/buying/buying";
import Contact from "../pages/contactPage/contact";
import ForgotPassword from "../pages/ForgotPassword/ForgotPassword";
import HomePage from "../pages/homePage/homePage";
import Login from "../pages/loginPage/login";

import PersonalPage from "../pages/personalPage/component/index.tsx";
import ProductDetails from "../pages/productDt/ProductDetails";
import PageProduct from "../pages/ProductPage/ProductPage";
import Registration from "../pages/registrationPage/registration";
import Tutorial from "../pages/tutorialPage/tutorial";
import "./routers.scss";
function Routers() {
  return (
    <div>
      <Routes className="router">
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/productDetails" element={<ProductDetails />}></Route>
        <Route path="/product" element={<PageProduct />}></Route>
        <Route path="/tutorial" element={<Tutorial />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/buying" element={<Buying />}></Route>
        <Route path="/registration" element={<Registration />}></Route>
        <Route path="/Login" element={<Login />}></Route>
        <Route path="/ForgotPassword" element={<ForgotPassword />}></Route>
        <Route path="/buyProduct" element={<BuyProduct />}></Route>
        <Route path="/personalPage" element={<PersonalPage />}></Route>
        
      </Routes>
    </div>
  );
}

export default Routers;
