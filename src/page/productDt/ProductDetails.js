import Footer from "../../components/footer/footer";
import Header from "../../components/headers/header";
import { withStyles } from "@material-ui/styles";
import { styles } from "../../common/withStyles";
import { ThemeProvider } from "@mui/material/styles";
import * as React from "react";
import { theme } from "../../common/Typography";
import { Button, Grid, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { product$ } from "../../redux/selector";
import { useNavigate } from "react-router-dom";

function ProductDetails(props) {
  const navigate =useNavigate()


  const pRdt = useSelector(product$);
  console.log(pRdt);
  JSON.stringify()
  return (
    <ThemeProvider theme={theme}>
      <div>
        <Header />

        <Grid  container  className={props.classes.product}>
          <Grid item xs={4}  className={props.classes.productLeft}>
            <Typography variant="h1" color='primary'>{pRdt.name}</Typography>

            <img
              
              className={props.classes.productImgDetail}
              src={pRdt.images}
              alt="ghế nhân viên"
            />
          </Grid>
          <Grid  item xs={3} className={props.classes.productRight}>
            <Typography color='secondary' variant="h2"> - Mã hàng: {pRdt.id} MSI </Typography>
            <Typography variant="poster"> - GIÁ: {pRdt.salePrice} (vnđ)</Typography><br/>

            <Typography variant="h3" color='primary'>   -FreeShip: miễn phí ship khu vực HCM</Typography> <br/>
            <Typography variant="h3" color='primary'> - Mô tả:{pRdt.shortDescription}</Typography>
            <p></p>
            <Button variant="contained"  onClick={()=> navigate( "/product") }> Xem tất cả sản phẩm</Button>
          </Grid>
        </Grid>
      
        <Footer />
      </div>
    </ThemeProvider>
  );
}
export default withStyles(styles)(ProductDetails);
