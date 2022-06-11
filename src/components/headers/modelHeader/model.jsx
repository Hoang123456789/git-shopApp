import * as React from "react";
import { withStyles } from "@material-ui/styles";
import { Button, Typography } from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Box from "@mui/material/Box";
import Popper from "@mui/material/Popper";
import Fade from "@mui/material/Fade";
import { styles } from "../../../common/withStyles";
import { useNavigate } from "react-router-dom";
function Model(props) {
  const isLoggedIn = localStorage.getItem("name");

  const navigate = useNavigate();
  const [open, setOpen] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [placement, setPlacement] = React.useState();

  const handleClick = (newPlacement) => (event) => {
    setAnchorEl(event.currentTarget);
    setOpen((prev) => placement !== newPlacement || !prev);
    setPlacement(newPlacement);
  };

  const canBeOpen = open && Boolean(anchorEl);
  const id = canBeOpen ? "transition-popper" : undefined;
  const hanleLogOut = () => {
    localStorage.removeItem("name");
    navigate("/login");
  };
  const hanleBuyProduct = () => {
    navigate("/buyProduct");
  };
  const hanlePersonalPage = () => {
    console.log(isLoggedIn);

    navigate("/personalPage");
  };
  return (
    <div>
      <li
        className={props.classes.avatars}
        aria-describedby={id}
        type="button"
        onClick={handleClick("bottom-end")}
      >
        <img
          className={props.classes.avatar}
          src="https://media3.scdn.vn/img4/2021/06_28/4Rjoo4tDlgdQcTrK7HXH.jpg"
          //  src="/static/media/avatar4.d0ebc5b5.png"
          alt=""
        />
        <Typography variant="poster"> User Name</Typography>
      </li>

      <Popper open={open} anchorEl={anchorEl} placement={placement} transition>
        {({ TransitionProps }) => (
          <Fade {...TransitionProps} timeout={350}>
            <Box sx={{ border: 1, p: 1, bgcolor: "background.paper" }}>
              <Typography variant="h2" onClick={hanlePersonalPage}>
                {" "}
                Trang cá nhân của bạn
              </Typography>
              <br />
              <Button onClick={hanleBuyProduct}>
                {" "}
                <ShoppingCartIcon /> giỏ hàng của bạn
              </Button>{" "}
              <br />
              <Button onClick={hanleLogOut}>
                {" "}
                <LogoutIcon /> Đăng xuất
              </Button>
            </Box>
          </Fade>
        )}
      </Popper>
    </div>
  );
}
export default React.memo(withStyles(styles)(Model));
