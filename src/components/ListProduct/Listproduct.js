import * as React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { withStyles } from "@material-ui/styles";
import { ThemeProvider } from "@mui/material/styles";
import { Button } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { Dialog, DialogTitle, Typography } from "@mui/material";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";

import { getProducts } from "./ListProductSlice";
import { styles } from "../../common/withStyles";
import { theme } from "../../common/Typography";
import { productFilter$ } from "../../redux/selector";
import useDebounce from "../../hooks/useDebounce";
import { requestProduct } from "../../constant/Config";

function Products(props) {
 
  const [open, setOpen] = React.useState(false);
  const dispatch = useDispatch();
  const [posts, setPosts] = React.useState({ data: [] });
  const navigate = useNavigate();
  const productFilter = useSelector(productFilter$);
  const debounced = useDebounce(productFilter, 800);
  React.useEffect(() => {
    requestProduct({
      method: "GET",
      url: `?name_like=${debounced}`,
      data: null,
    })
      // axios.get(`https://js-post-api.herokuapp.com/api/products`, {
      //   params: {q:debounced},
      // })
      .then((res) => {
        console.log(res);
        setPosts(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [debounced]);
  const handleClose = () => {
    setOpen(false);
  };
  const handleClickOpen = () => {
    setOpen(true);
  };

  const hanldeGotoCart = () => {
    navigate("/buyProduct");
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <ThemeProvider theme={theme}>
      <div className={props.classes.showtabBuyProduct}>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <Typography variant="h2" color="secondary">
            Thành công{" "}
          </Typography>
          <DialogTitle id="alert-dialog-title">
            Đã thêm sản phẩm vào giỏ hàng
          </DialogTitle>
          <Button
            className={props.classes.showtabBuyButton}
            variant="contained"
            color="secondary"
            onClick={hanldeGotoCart}
          >
            xem giở hàng
          </Button>
          <HighlightOffIcon
            className={props.classes.showtabBuyIcon}
            onClick={handleClose}
          />
        </Dialog>
      </div>
      <div className={props.classes.productItem}>
        {posts.data.map((post) => {
          return (
            <div key={post.id} className={props.classes.products}>
              <h3>{post.name}</h3>

              <img
                className={props.classes.productImg}
                src={post.images[0]}
                alt="ghế nhân viên"
              />
              <p> MSP:{post.id}</p>
              <Typography variant="poster">
                Giá: {post.salePrice} vnđ{" "}
              </Typography>

              <Typography
                className={props.classes.Details}
                onClick={() => {
                  window.scroll({
                    top: 0,
                    behavior: "smooth",
                  });
                  console.log(post.id);
                  navigate("/productDetails");
                  dispatch(getProducts({ id: post.id }));
                }}
                variant="poster"
              >
                Xem chi tiết
              </Typography>
              <Button
                onClick={() => {
                  handleClickOpen();
                  dispatch(getProducts({ id: post.id }));
                }}
                variant="contained"
                className={props.classes.cart}
              >
                Mua ngay
              </Button>
              <Outlet />
            </div>
          );
        })}
      </div>
    </ThemeProvider>
  );
}
//export default  withStyles(styles)(Products)
export default React.memo(withStyles(styles)(Products))
