import { Route, Routes } from "react-router-dom";
import BuyProduct from "../page/buying/buying";
import Buying from "../page/buying/buying";
import Contact from "../page/contactPage/contact";
import ForgotPassword from "../page/ForgotPassword/ForgotPassword";
import HomePage from "../page/homePage/homePage";
import Login from "../page/loginPage/login";
import ProductDetails from "../page/productDt/ProductDetails";
import PageProduct from "../page/ProductPage/ProductPage";
import Registration from "../page/registrationPage/registration";
import Tutorial from "../page/tutorialPage/tutorial";
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
      </Routes>
    </div>
  );
}

export default Routers;
