import { Grid, Typography } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "../../common/Typography";
import Footer from "../../components/footer/footer";
import Header from "../../components/headers/header";
import { withStyles } from "@material-ui/styles";
import { styles } from "../../common/withStyles";
import { useSelector } from "react-redux";
import { product$ } from "../../redux/selector";
import { useEffect, useState } from "react";
import axios from "axios";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
function BuyProduct(props) {
  const returnIdRedux = useSelector(product$);
  console.log(returnIdRedux);

  const [posts, setPosts] = useState({ data: [] });
  const [state, setState] = useState(false);
  useEffect(() => {
    axios({
      method: "GET",
      url: `https://js-post-api.herokuapp.com/api/products?id=${returnIdRedux}`,
      data: null,
    })
      .then((res) => {
        setState(true);
        setPosts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [returnIdRedux]);

  console.log(posts);

  return (
    <ThemeProvider theme={theme}>
      <div>
        <Header />
        <Typography variant="h1" color="secondary">
          Giỏ Hàng
        </Typography>
        <div className={props.classes.buyIng}>
          <Grid container>
            <Grid item xs={1}>
              <Typography variant="h2" color="primary">
               Mã sản phẩm
              </Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography variant="h2" color="primary">
                {" "}
                Tên sản phẩm{" "}
              </Typography>
            </Grid>
            <Grid item xs={3}>
              <Typography variant="h2" color="primary">
                {" "}
                số lượng
              </Typography>
            </Grid>
            <Grid item xs={1}>
              <Typography variant="h2" color="primary">
                {" "}
                Giá bán
              </Typography>
            </Grid>
            <Grid item xs={1}>
              <Typography variant="h2" color="primary">
                {" "}
                Thành tiền
              </Typography>
            </Grid>
            <Grid item xs={1}>
              <Typography variant="poster"> Xóa</Typography>
            </Grid>
          </Grid>
        </div>

        {state &&
          posts.map((post, index) => {
            return (
              <div className={props.classes.buyIng}>
              <Grid container>
                <Grid item xs={1}>
                  <Typography variant="h3" color="primary">
                  {post.id}
                  </Typography>
                </Grid>
                <Grid item xs={4}>
                  <Typography variant="h3" color="primary">
                  {post.name}
                  </Typography>
                </Grid>
                <Grid item xs={3}>
                  <Typography variant="h3" color="primary">
                    <input type="text" />
                  </Typography>
                </Grid>
                <Grid item xs={1}>
                  <Typography variant="h3" color="primary">
                  {post.originalPrice}  (Vnđ)
                  </Typography>
                </Grid>
                <Grid item xs={1}>
                  <Typography variant="h3" color="primary">
                  {post.originalPrice} (Vnđ)
                  </Typography>
                </Grid>
                <Grid item xs={1}>
                  <Typography variant="poster"> <DeleteForeverIcon/></Typography>
                </Grid>
              </Grid>
            </div>
    
            )

                  

              
           

          })}

        <Footer />
      </div>
    </ThemeProvider>
  );
}
export default withStyles(styles)(BuyProduct);
