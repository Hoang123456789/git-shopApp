import { Button } from "@mui/material";
import Footer from "../../components/footer/footer";
import Header from "../../components/headers/header";
import { withStyles } from "@material-ui/styles"
import { styles } from "../../common/withStyles";
import { Navigate } from "react-router-dom";
function Tutorial(props) {
  const isLoggedIn = localStorage.getItem("name");
  return (
    <div >
       {   isLoggedIn==null && <Navigate to="/login" />} 
      <Header /> 
       
     <div className={props.classes.catalogues}> CATALOGUE SẢN PHẨM NỘI THẤT VĂN PHÒNG HÒA PHÁT
      <p>
        Chúng tôi xin trân trọng gửi đến quí khách hàng quyển catalogue các sản
        phẩm của Công Ty CP Nội thất Miền Nam đại lý Hòa Phát. Công ty Hòa Phát
        đã nghiên cứu và phát triển hơn 1500 sản phẩm nội thất cho lĩnh vực văn
        phòng để đáp ứng mọi nhu cầu theo các nhóm đối tượng khách hàng. Hòa
        Phát luôn nâng cao chất lượng sản phẩm để tạo dấu ấn trong mỗi khách
        hàng.
      </p>
      <Button variant="contained">
        <a href="https://noithathoaphat3.com/data/files/catalogue-noi-that-hoa-phat.pdf">
          {" "}
          TẢI CATALOGUE SẢN PHẨM NỘI THẤT VĂN PHÒNG HÒA PHÁT
        </a>
      </Button>
      <p>
        Quyển Catalogue bao gồm hướng dẫn các dòng sản phẩm chính của Công ty CP
        Nội Thất Miền Nam. Các sản phẩm được phân theo từng danh mục như sau:
      </p>
      <p> ⇒ Bàn, tủ văn phòng làm từ gỗ công nghiệp</p>
      <p>⇒ Bàn, tủ sắt văn phòng</p>
      <p>⇒ Bàn vi tính</p>
      <p>⇒ Ghế xoay văn phòng</p>
      <p>⇒ Két bạc chống cháy, an toàn</p>
      <p>⇒ Các loại bàn ghế ăn, các mặt hàng gia dụng làm từ ống thép</p>
      <p>⇒ Các sản phẩm nội thất gia đình làm từ gỗ tự nhiên</p>
      <p>
        ⇒ Các sản phẩm nội thất phục vụ giáo dục: bàn ghế trường học từ bậc mẫu
        giáo đến đại học, tủ thư viện, phòng thí nghiệm…
      </p>
      <p>
        {" "}
        ⇒ Các sản phẩm phục vụ công trình công cộng: ghế phòng chờ nhà ga, sân
        bay, bệnh viện, các loại ghế rạp hát, hội trường, ghế ngồi trên sân vận
        động.
      </p></div>
      <Footer />
    </div>
  );
}
export default  withStyles (styles) (Tutorial)
