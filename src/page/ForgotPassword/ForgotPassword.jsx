import { ThemeProvider } from "@mui/material/styles";
import Button from "@mui/material/Button";
import "./ForgotPassword.css";
import { withStyles } from "@material-ui/styles";
import { theme } from "../../common/Typography";
import TextField from "@mui/material/TextField";
import * as React from "react";
import Typography from "@mui/material/Typography";
import { Link, Navigate, Outlet, useNavigate } from "react-router-dom";
import { styles } from "../../common/withStyles";
import axios from "axios";
import Header from "../../components/headers/header";
import Footer from "../../components/footer/footer";
import { Dialog, DialogTitle } from "@mui/material";

function ForgotPassword(props) {
  const isLoggedIn = localStorage.getItem("name");
  const navigate = useNavigate();
  const [data, setData] = React.useState({ email: "", password: "12345678" });
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const hanleGetEmail = (e) => {
    setData({ ...data, email: e.target.value });
    console.log(e.target.value);
  };

  const hanleFindEmail = () => {
    axios({
      method: "POST",
      url: "http://localhost:8000/users/login",
      data: {
        email: data.email,
        password: data.password,
      },
    })
      .then((res) => {
        let x = res.status;

        if (x === 200) {

          handleClickOpen()


          
     
      setTimeout(() => {
        
        localStorage.setItem("name", data.email)
        handleClose()
        navigate("/")
      }, 1000);

      clearTimeout(
        setTimeout(() => {
          handleClose();
        }, 1000)
      );

        }
      })
      .catch((err) => {
        console.log("ngu");
      });
  };
  return (
    <ThemeProvider theme={theme}>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Xác nhận Email thành công!"}
        </DialogTitle>
      </Dialog>
      {isLoggedIn != null && <Navigate to="/" />}
      <Header />
      <div className="ForgotPasswords">
        <div className="ForgotPassword">
          <div className="ForgotPassword-h3">
            <Typography variant="h2">Tìm tài khoản của bạn</Typography>
          </div>

          <div variant="body1" className="ForgotPassword-p">
            <Typography variant="h3">
              Vui lòng nhập email để tìm kiếm tài khoản của bạn.
            </Typography>
            <p></p>
            <TextField
              value={data.email}
              onChange={hanleGetEmail}
              className={props.classes.Inputs}
              label="Nhập email của bạn"
              id="outlined-size-small"
              size="small"
            />
          </div>
          <div className="ForgotPassword-button">
            <div className="find">
              <Button
                color="secondary"
                variant="contained"
                className={props.classes.Find}
                onClick={hanleFindEmail}
              >
                Tìm kiếm
              </Button>
            </div>
            <div className="delete">
              <Link to="/Login">
                <Button variant="contained" className={props.classes.Delete}>
                  Hủy
                </Button>
                <Outlet />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </ThemeProvider>
  );
}
export default withStyles(styles)(ForgotPassword);
