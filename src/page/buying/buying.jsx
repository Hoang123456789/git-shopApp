import { Grid, Typography } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "../../common/Typography";
import Footer from "../../components/footer/footer";
import Header from "../../components/headers/header";
import { withStyles } from "@material-ui/styles";
import { styles } from "../../common/withStyles";
import { useSelector } from "react-redux";
import { product$ } from "../../redux/selector";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
function BuyProduct(props) {
  const pRdt = useSelector(product$);
  console.log(pRdt);

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

        <div className={props.classes.buyIng}>
          <Grid container>
            <Grid item xs={1}>
              <Typography variant="h3" color="primary">
                {pRdt.id}
              </Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography variant="h3" color="primary">
                {pRdt.name}
              </Typography>
            </Grid>
            <Grid item xs={3}>
              <Typography variant="h3" color="primary">
                <input type="text" />
              </Typography>
            </Grid>
            <Grid item xs={1}>
              <Typography variant="h3" color="primary">
                {pRdt.originalPrice} (Vnđ)
              </Typography>
            </Grid>
            <Grid item xs={1}>
              <Typography variant="h3" color="primary">
                {pRdt.originalPrice} (Vnđ)
              </Typography>
            </Grid>
            <Grid item xs={1}>
              <Typography variant="poster">
                {" "}
                <DeleteForeverIcon />
              </Typography>
            </Grid>
          </Grid>
        </div>

        <Footer />
      </div>
    </ThemeProvider>
  );
}
export default withStyles(styles)(BuyProduct);
