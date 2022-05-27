import { Navigate } from "react-router-dom";
import Footer from "../../components/footer/footer";
import Header from "../../components/headers/header";

function Contact(props) {
  const isLoggedIn = localStorage.getItem("name");
  return (
    <div>
        {   isLoggedIn==null && <Navigate to="/login" />} 
      <Header />
      <h2> LIÊN HỆ PHẢN HỒI - GÓP Ý</h2>
      <h3>Kính Chào Quý Khách!</h3>
      <p>
        Mọi thông tin phản hồi - thắc mắc - góp ý về chất lượng dịch vụ, sản
        phẩm & website Quý Khách vui lòng liên hệ với Hòa Phát Sài Gòn thông qua
        địa chỉ email: ceohpsg@gmail.com. Hòa Phát Sài Gòn sẽ có phản hồi chi
        tiết sớm nhất đến với Quý Khách.
      </p>
      <p>
        Lưu ý: Quý Khách cần đặt hàng - tư vấn sản phẩm vui lòng liên hệ bộ phận
        kinh doanh qua hotline: 028.3727.1111 hoặc email: hoaphat710@gmail.com Ý
        kiến đóng góp của Quý Khách là niềm vinh hạnh của Công Ty Chúng Tôi!
        Kính Chúc Quý Khách có những trải nghiệm thú vị cùng sản phẩm nội thất
        văn phòng của Chúng Tôi
        <br />
        Địa chỉ đường đi:
      </p>

      <img
        src="https://www.google.com/maps/place/C%C3%B4ng+Ty+C%E1%BB%95+Ph%E1%BA%A7n+N%E1%BB%99i+Th%E1%BA%A5t+H%C3%B2a+Ph%C3%A1t+%C4%90%C3%B4ng+S%C3%A0i+G%C3%B2n/@11.2066078,108.1865399,7.81z/data=!4m5!3m4!1s0x0:0xdb56f6cd9d5506ad!8m2!3d10.8018498!4d106.7121808?hl=vi"
        alt="đường đi"
      />
      <Footer />
    </div>
  );
}
export default Contact;
