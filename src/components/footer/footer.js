import { withStyles } from "@material-ui/styles";
import { styles } from "../../common/withStyles";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "../../common/Typography";
import { Typography } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CallIcon from "@mui/icons-material/Call";
import ContactPhoneIcon from "@mui/icons-material/ContactPhone";
import FileUploadIcon from "@mui/icons-material/FileUpload";
import { blue } from "@mui/material/colors";

const color = blue[50];
function Footer(props) {
  const handleReturn = () => {
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
  };
  // console.log(props);

  return (
    <ThemeProvider theme={theme}>
      <div className={props.classes.footers}>
        <img
          src="https://www.hoaphat.com.vn/assets/images/background_footer_left.png"
          alt=""
        ></img>
        <img
          src="https://www.hoaphat.com.vn/assets/images/background_footer_right.png"
          alt=""
        />

        <div className={props.classes.information}>
          <FileUploadIcon
            fontSize="large"
            onClick={handleReturn}
            className={props.classes.uploadIcon}
          />
          <div className={props.classes.informationHeader}>
            <Typography variant="h2" color={color}>
              <LocationOnIcon fontSize="small" />
              KCN Phố Nối A, Xã Giai Phạm, Huyện Yên Mỹ, Tỉnh Hưng Yên, Việt Nam
            </Typography>
          </div>
          <div className={props.classes.informationBody}>
            <div className={props.classes.informationBodyRow}>
              <Typography variant="h3" color={color}>
                Văn Phòng Hà Nội
              </Typography>
              <Typography variant="p" color={color}>
                <LocationOnIcon fontSize="small" />
                66 Nguyễn Du,P,Nguyễn Du,Q.Hai Bà Trưng,Hà nội
              </Typography>
              <Typography variant="p" color={color}>
                <CallIcon fontSize="small" />
                024 628 48 666
              </Typography>

              <Typography variant="p" color={color}>
                <ContactPhoneIcon fontSize="small" />
                024 628 33 456
              </Typography>
            </div>

            <div className={props.classes.informationBodyRow}>
              <Typography color={color} variant="h3">
                Văn Phòng Đà Nẵng
              </Typography>
              <Typography color={color} variant="p">
                <LocationOnIcon fontSize="small" />
                171 Trường Chinh, P. An khê, Q. Thanh Khê, Đà Nẵng
              </Typography>
              <Typography color={color} variant="p">
                <CallIcon fontSize="small" />
                023 637 21 232
              </Typography>
              <Typography color={color} variant="p">
                <ContactPhoneIcon fontSize="small" />
                024 628 33 456
              </Typography>
            </div>
            <div className={props.classes.informationBodyRow}>
              <Typography color={color} variant="h3">
                Văn Phòng Tp HCM
              </Typography>
              <Typography color={color} variant="p">
                <LocationOnIcon fontSize="small" />
                643 Điện Biên Phủ, P. 25, Q. Bình Thạnh, TP. Hồ Chí Minh
              </Typography>
              <Typography color={color} variant="p">
                <CallIcon fontSize="small" />
                028 629 75 599
              </Typography>
              <Typography color={color} variant="p">
                <ContactPhoneIcon fontSize="small" />
                024 628 33 456
              </Typography>
            </div>
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}
export default withStyles(styles)(Footer);
