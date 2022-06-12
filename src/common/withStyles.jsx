export const styles = {
  h1: {
    fontSize: "14px",
    fontWeight: 600,
    margin: 5,
    "@media (min-width:800px)": {
      fontSize: "20px",
      fontWeight: 700,
      margin: 3,
    },
  },
  Delete: {
    width: 30,
    height: 30,
  },
  Find: {
    width: 100,
    height: 30,
  },
  Finds: {
    width: 80,
    height: 40,
  },
  FindsHeader: {
    borderRadius: 50,
    width: 40,
    height: 40,
  },
  Inputs: {
    width: 350,
    height: 30,
  },
  selectHeader: {
    width: 400,
    borderRadius: 0,
  },
  select: {
    width: 400,
  },
  HeaderInput: {
    height: 100,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    background: "#a7ffeb",
    "@media (max-width:724px)": {
      display: "none",
    }
  },

  HeaderImage: {
    marginRight: 30,
    "@media (max-width:724px)": {
      display: "none",
    },
  },
  imgs: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  footers: {
    width: "100%",
    height: "100%",
    background: "#1d428a",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    position: "relative",
  },
  uploadIcon: {
    position: "fixed",
    right: 2,
    bottom: 100,
  },
  information: {
    position: "absolute",
    display: "flex",
    flexDirection: "column",

    alignItems: "center",
    width: "100%",
    height: "100%",
  },
  informationBody: {
    display: "flex",
    flexDirection: "row",
    margin: "40px 10px  10px 20px",
  },
  informationBodyRow: {
    display: "flex",
    flexDirection: "column",
    margin: 50,
  },
  informationHeader: {
    margin: "150px 0 0 30px ",
  },
  imgRegistion: {
    width: "100%",
    height: "500px",
  },
  Grid: {
    width: 600,
  },
  InputRegistion: {
    width: 350,
  },
  Buttons: {
    width: 600,
    height: 40,
  },
  ButtonRegistion: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  Input1: {
    width: 300,
    height: 40,
  },
  //product
  productItem: {
    background: "#fff",
    display: "flex",
    flexWrap: "wrap",

    justifyContent: "center",
  },
  cart: {
    position: "absolute",
    bottom: 8,
    right: 10,
  },
  Details: {
    position: "absolute",
    bottom: 12,
    left: 10,
  },
  products: {
    position: "relative",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    background: "#fff",
    width: "270px",
    height: "420px",
    margin: "10px",
    border: "1px solid #555   ",
    borderRadius: "5px",
   
  },
  productsName:{
     fontSize:16,
    position: "absolute",
    top:10,
     color:'#673ab7',
     width: "250px",
     height: "110px",
     display: "flex",
     flexDirection: "column",
     alignItems: "center",
    justifyContent: "center",
    paddingBottom:20
  },
  productImg: {
    width: "120px",
    height: "120px",
    marginBottom:5
  },
  product: {
    margin: "20px 0 20px 100px",
    display: "flex",
    flexDirection: "row",
  
    "@media (max-width:724px)": {
      display: "flex",
     flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
     
      
    
    },
  },
  productRight: {},
  productImgDetail: {
    width: "80%",
  },
  productLeft: {},
  avatars: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
 
    padding: "2px 0 2px 0",
  },
  description: {
    width: "80%",
    height: "100%",
    border: "1px solid #555",
    margin: "0 0 0 125px",
    padding: 5,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: "50%",margin:5,

  },
  catalogues: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },

  showtabBuyProduct: {
    position: "relative",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  showtabBuyIcon: {
    position: "absolute",
    top: 2,
    right: 2,
  },
  showtabBuyButton: {
    width: 160,
  },
  buyIng: {
    border: " 1px solid #555",
    width: "100%",
    padding: "1px",
    margin: "1px",
  },
};
