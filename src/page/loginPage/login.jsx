import * as React from "react";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "../../common/Typography";
import Footer from "../../components/footer/footer";
import Header from "../../components/headers/header";
import Button from "@mui/material/Button";
import { Link, Navigate, Outlet, useNavigate } from "react-router-dom";
import { withStyles } from "@material-ui/styles";
import { Dialog, DialogTitle, TextField, Typography } from "@mui/material";
import { styles } from "../../common/withStyles";
import "./login.css";
import axios from "axios";
//import callApi from "../../api/apiCaller";
function Login(props) {
  const navigate = useNavigate();
  const isLoggedIn = localStorage.getItem("name");
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const [data, setData] = React.useState({
    email: "",
    password: "",
    UserName: "",
  });
  const handleEmail = (e) => {
    console.log(e.target.value);
    setData({ ...data, email: e.target.value });
  };
  const handlePassword = (e) => {
    console.log(e.target.value);
    setData({ ...data, password: e.target.value });
  };
  const handleUserName = (e) => {
    console.log(e.target.value);
    setData({ ...data, UserName: e.target.value });
  };
  const hanleLogin = () => {
    axios({
      method: "POST",
      url: "http://localhost:8000/users/login",
      data: {
        email: data.email,
        password: data.password,
      },
    })
      .then((res) => {
        localStorage.setItem("name", data.UserName);
        let x = res.status;
        if (x === 200) {
          handleClickOpen()

          setTimeout(() => {
            handleClose();
           navigate("/");
          }, 1000);

          clearTimeout(
            setTimeout(() => {
              handleClose();
            }, 1000)
          );
        }
      })
      .catch((err) => {
        console.log("is not user",err);
      });
  };
  return (
    <ThemeProvider theme={theme}>
      {isLoggedIn != null && <Navigate to="/" />}
      <div className="logins">
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            {" Đăng nhập thành công!"}
          </DialogTitle>
        </Dialog>
        <Header />
        <div className="loginbig">
          <img
            className={props.classes.imgRegistion}
            src="https://www.hoaphat.com.vn/assets/images/background1.png"
            alt=""
          />
          <div className="login">
            <Typography className="login-h3" variant="h1">
              Đăng nhập
            </Typography>
            <TextField
              value={data.UserName}
              onChange={handleUserName}
              className={props.classes.Input1}
              label="UserName"
              id="outlined-size-small"
              size="small"
            />
            <p className="login-p1"></p>
            <TextField
              value={data.email}
              onChange={handleEmail}
              className={props.classes.Input1}
              label="Email"
              id="outlined-size-small"
              size="small"
            />
            <p className="login-p1"></p>
            <TextField
              onChange={handlePassword}
              value={data.password}
              className={props.classes.Input1}
              label="Mật khẩu"
              id="outlined-size-small"
              size="small"
            />
            <p></p>
            <div className="login-button">
              <Link to="/login">
                <Button
                  onClick={hanleLogin}
                  variant="contained"
                  className={props.classes.Input1}
                  color="secondary"
                >
                  Đăng nhập
                </Button>
              </Link>
              <Link to="/ForgotPassword">
                <Typography variant="h3">Quên mật khẩu?</Typography>
              </Link>
              <Link to="/registration">
                Bạn chưa có tài khoản?
                <Typography variant="poster"> Đăng kí</Typography>
              </Link>
              <Outlet />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default withStyles(styles)(Login);
