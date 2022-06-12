//import { Button } from "@mui/material";
import { Navigate, useLocation } from "react-router-dom";
import Footer from "../../components/footer/footer";
import Header from "../../components/headers/header";
import Products from "../../components/ListProduct/Listproduct";

function PageProduct() {
  let location = useLocation();
  const isLoggedIn = localStorage.getItem("name");
 
    return (
      <div>
       { isLoggedIn ==null&&  <Navigate to="/login" state={{ from: location }} replace />} 

        <Header />
        <Products />
        <Footer />
      </div>
    );
  
}
export default PageProduct;