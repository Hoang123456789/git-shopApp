import * as React from "react";
import "./header.css";

import { Link } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "../../common/Typography";
import { Button, Typography } from "@mui/material";
import HeaderInput from "./headerInput/headerInput";
import { withStyles } from "@material-ui/styles";
import { styles } from "../../common/withStyles";

import Model from "./modelHeader/model";

function Header(props) {
  const isLoggedIn = localStorage.getItem("name");

  return (
    <ThemeProvider theme={theme}>
      <div className="header">
        <nav>
          <ul className="demo">
            <li>
              <Link color="neutral" to="/">
                <Button color="secondary">
                  <Typography variant="h2"> Trang chủ</Typography>
                </Button>
              </Link>
            </li>
            <li>
              <Link to="/product">
                <Button color="secondary">
                  <Typography variant="h2"> Sản phẩm</Typography>
                </Button>
              </Link>
            </li>
            <li>
              <Link to="/tutorial">
                <Button color="secondary">
                  <Typography variant="h2"> hướng dẫn </Typography>
                </Button>
              </Link>
            </li>
            <li>
              <Link to="/contact">
                <Button color="secondary">
                  <Typography variant="h2"> Liên hệ</Typography>
                </Button>
              </Link>
            </li>
           {isLoggedIn == null &&  <li>
              <Link to="/registration">
                <Button color="secondary">
                  <Typography variant="h2"> Đăng ký</Typography>
                </Button>
              </Link>
            </li>}

            {isLoggedIn == null &&  <li>
              <Link to="/Login">
                <Button color="secondary">
                  <Typography variant="h2"> Đăng nhập</Typography>
                </Button>
              </Link>
            </li>}         
            {isLoggedIn != null && <Model />}
          </ul>
        </nav>
        <HeaderInput />
      </div>
    </ThemeProvider>
  );
}
export default withStyles(styles)(Header);
