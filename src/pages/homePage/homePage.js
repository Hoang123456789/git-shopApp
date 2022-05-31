import { Navigate } from "react-router-dom";
import Footer from "../../components/footer/footer";
import Header from "../../components/headers/header";
import Information from "../../components/information/information";
import ListProduct from "../../components/ListProduct/Listproduct";


function HomePage() {
  
  const isLoggedIn = localStorage.getItem("name");

  return (
    <div>
      {isLoggedIn == null && <Navigate to="/login" />}
   
   
      <Header />
      <Information />
      <ListProduct />
      <Footer />
    </div>
  );
}

export default HomePage;
