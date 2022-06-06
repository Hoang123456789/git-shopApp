import { withStyles } from "@material-ui/styles";
import SearchIcon from "@mui/icons-material/Search";
import Button from "@mui/material/Button";
import { ThemeProvider } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import * as React from "react";
import { useDispatch } from "react-redux";
import { theme } from "../../../common/Typography";
import { styles } from "../../../common/withStyles";
import headerInputSlice from "./headerInputSlice";

function HeaderInput(props) {
  console.log("header input rerender");
  const [data, setData] = React.useState("");

  const dispatch = useDispatch();
  const handleValueChange = (e) => {
    setData(e.target.value);
    dispatch(headerInputSlice.actions.FilterProduct({ data: e.target.value }));
  };

  return (
    <ThemeProvider theme={theme}>
      <div className={props.classes.HeaderInputs}>
        <div className={props.classes.HeaderInput}>
          <img
            className={props.classes.HeaderImage}
            src="https://hoaphatsaigon.com/upload/giaodien/logo.png"
            alt=""
          />

          <TextField
            className={props.classes.selectHeader}
            id="outlined-size-small"
            placeholder="Tìm kiếm sản phẩm..."
            size="small"
            onChange={handleValueChange}
            value={data}
          ></TextField>

          <Button
            className={props.classes.FindsHeader}
            color="secondary"
            variant="contained"
          >
            <SearchIcon />            
          </Button>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default withStyles(styles)(HeaderInput)

