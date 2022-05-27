import Footer from "../../components/footer/footer";
import Header from "../../components/headers/header";
import { withStyles } from "@material-ui/styles";
import { styles } from "../../common/withStyles";
import { ThemeProvider } from "@mui/material/styles";
import * as React from "react";
import axios from "axios";
//import ProductBody from "./productBody/productBody";
import { theme } from "../../common/Typography";
import { Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { product$ } from "../../redux/selector";
 






function ProductDetails(props) {
  const productIdreturn = useSelector(product$);
  console.log(productIdreturn);

  const [posts, setPosts] = React.useState({ data: [] });

  React.useEffect(() => {
    axios({
      method: "GET",
      url: `https://js-post-api.herokuapp.com/api/products?id=${productIdreturn}`,
      data: null,
    })
      .then((posts) => {
        setPosts(posts);
        console.log(posts.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [productIdreturn]);

  return (
    <ThemeProvider theme={theme}>
      <div>
        <Header />

        {posts.data.map((post) => {
          return (
            <div key={post.id} className={props.classes.product}>
              <div className={props.classes.productLeft}>
                <Typography variant="h1">{post.name}</Typography>

                <img
                  className={props.classes.productImgDetail}
                  src={post.images[0]}
                  alt="ghế nhân viên"
                />
              </div>
              <div className={props.classes.productRight}>
                <Typography variant="h3"> - Mã hàng: {post.id} MSI </Typography>
                <Typography variant="h3">
                  {" "}
                  - GIÁ: {post.salePrice} vnd
                </Typography>

                {/* <img
                  src="http://noithathoaphat.com.vn/product_images/uploaded_images/tuvanbanhang.jpg"
                  alt=""
                />
                <img
                  src="http://noithathoaphat.com.vn/images/services.jpg"
                  alt=""
                /> */}
                <p>{post.shortDescription}</p>
              </div>
            </div>
          );
        })}

        {/* <div>
          <ProductBody  />
        </div> */}
        <Footer />
      </div>
    </ThemeProvider>
  );
}
export default withStyles(styles)(ProductDetails);
