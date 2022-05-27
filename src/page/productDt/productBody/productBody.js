import ButtonGroup from "@mui/material/ButtonGroup";
import Button from "@mui/material/Button";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "../../../common/Typography";
import { Typography } from "@mui/material";
import { withStyles } from "@material-ui/styles";
import { styles } from "../../../common/withStyles";

function ProductBody(props) {
  return (
    <ThemeProvider theme={theme}>
      <div >
        <div className={props.classes.description}>
        <ButtonGroup disableElevation variant="contained">
          <Button  >Mô tả</Button>
          <Button >Sản phẩm tương tự</Button>
          <Button  > Đánh giá Sản phẩm </Button>
        </ButtonGroup>
          <Typography className="login-h3" variant="h1">
            Mô tả sản phẩm
          </Typography>
          <Typography variant="h2">Ghế nhân viên văn phòng SG555</Typography>
          <Typography variant="h2"> Kiểu Dáng</Typography>
          <Typography variant="h3">- Ghế xoay nhân viên văn phòng có tay nhựa</Typography>
          <Typography variant="h3">
            {" "}
            - Đệm tựa mút bọc vải nỉ tạo sự thoải mái cho người ngồi
          </Typography>
          <Typography variant="h3">
            {" "}
            - Ghế có bát có chức năng điều chỉnh độ cao cần hơi.
          </Typography>
          <Typography variant="h3"> - Chân ghế bằng nhựa có bánh xe di chuyển</Typography>
          <Typography variant="h3">
            {" "}
            - Sản phẩm ghế xoay nhân viên SG555 sử dụng với các loại bàn hòa
            phát phù hợp với không gian văn phòng làm việc.
          </Typography>
          <img
            src="http://noithathoaphat.com.vn/product_images/uploaded_images/videobutton.png"
            alt=""
          />
          <Typography variant="h3">Kích Thước: W540 x D500 x H(855-980) mm</Typography>
           <Typography variant="h3">   Chất liệu: Đệm tựa bọc vải, chân tay bằng nhựa</Typography>
          <Typography variant="h3"> Bảo hành: 1 năm theo tiêu chuẩn nhà máy </Typography>
          <Typography variant="h3"> Bộ sản phẩm chính hãng gồm:</Typography>
          <Typography variant="h3">
            {" "}
            - Sản phẩm đi kèm với hướng dẫn lắp đặt, sử dụng.{" "}
          </Typography>
          <Typography variant="h3"> - Phiếu bảo hành </Typography>
          <Typography variant="h3">
            {" "}
            Sản phẩm của công ty Nội Thất Hòa Ph - Phân phối bởi Việt Nội Thất{" "}
          </Typography>
          <img
            src="http://noithathoaphat.com.vn/product_images/uploaded_images/SG555.jpg"
            alt=""
          />
        </div>
        <div className="productSame">Sản phẩm tương tự</div>

        <div className="Evaluate">Đánh giá sản phẩm</div>
      </div>
    </ThemeProvider>
  );
}

export default  withStyles(styles)(ProductBody) 
