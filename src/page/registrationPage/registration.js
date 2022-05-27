import { withStyles } from "@material-ui/styles";
import { Typography } from "@mui/material";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import { ThemeProvider } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import axios from "axios";
import * as React from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
//import registrationApi from "../../api/registration";
import { theme } from "../../common/Typography";
import { styles } from "../../common/withStyles";
import Footer from "../../components/footer/footer";
import Header from "../../components/headers/header";
import "./registration.scss";

function Registration(props) {
  const navigate = useNavigate();
  const [userName, setUserName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [passWord, setPassWord] = React.useState("");
  const [passWords, setPassWords] = React.useState("");
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const HandleUserNameChange = (e) => {
    setUserName(e.target.value);
  };
  const HandleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const HandlePassWordChange = (e) => {
    setPassWord(e.target.value);
  };
  const HandlePassWordsChange = (e) => {
    setPassWords(e.target.value);
  };
  const HanleRegistration = () => {
    axios({
      method: "POST",
      url: "http://localhost:8000/users/signup",
      // url: registrationApi.getAll,
      data: {
        email: email,
        password: passWord,
      },
    })
      .then((posts) => {
        localStorage.setItem("name", userName);
        console.log(posts);
        handleClickOpen()
        
        setTimeout(() => {
          handleClose();
          navigate("/")
        }, 1000);
        
        clearTimeout(
          setTimeout(() => {
            handleClose();
          }, 1000)
          );
      })

      .catch((err) => {
        console.log("is not login");
      });
    setUserName("");
    setEmail("");
    setPassWord("");
    setPassWords("");
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
          {" Đăng kí thành công!"}
        </DialogTitle>
      </Dialog>

      <div className="Registrations">
        <Header />

        <div className="Registration-big">
          <img
            className={props.classes.imgRegistion}
            src="https://www.hoaphat.com.vn/assets/images/background1.png"
            alt=""
          />
          <div className="Registration">
            <Typography variant="h1" className="Registration-h">
              Đăng kí
            </Typography>

            <div>
              <TextField
                value={userName}
                className={props.classes.InputRegistion}
                label="Tên đăng nhập"
                id="outlined-size-small"
                size="small"
                onChange={HandleUserNameChange}
              />
              <p className="Registration-p"></p>
              <TextField
                value={email}
                className={props.classes.InputRegistion}
                label="Email"
                id="outlined-size-small"
                size="small"
                onChange={HandleEmailChange}
              />
              <p className="Registration-p"></p>
              <TextField
                value={passWord}
                type="password"
                className={props.classes.InputRegistion}
                label="Mật khẩu"
                id="outlined-size-small"
                size="small"
                onChange={HandlePassWordChange}
              />
              <p className="Registration-p"></p>
              <TextField
                value={passWords}
                type="password"
                className={props.classes.InputRegistion}
                label="Nhập lại mật khẩu"
                id="outlined-size-small"
                size="small"
                onChange={HandlePassWordsChange}
              />
              <p></p>

              <div className={props.classes.ButtonRegistion}>
                <Button
                  color="secondary"
                  onClick={HanleRegistration}
                  //  href={ok ? "/registration" : "/"}
                  variant="contained"
                >
                  Đăng kí
                </Button>

                <Outlet />
              </div>
            </div>
            <Link to="/Login">
              Bạn đã có tài khoản?
              <Typography variant="poster">Đăng nhập</Typography>
            </Link>
          </div>
          <Outlet />
        </div>
        <Footer />
      </div>
    </ThemeProvider>
  );
}
export default withStyles(styles)(Registration);
