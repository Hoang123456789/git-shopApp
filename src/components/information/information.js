import { useEffect, useState } from "react";
import KeyboardDoubleArrowLeftSharpIcon from "@mui/icons-material/KeyboardDoubleArrowLeftSharp";
import KeyboardDoubleArrowRightSharpIcon from "@mui/icons-material/KeyboardDoubleArrowRightSharp";
import { withStyles } from "@material-ui/styles";
import { styles } from "../../common/withStyles";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "../../common/Typography";

let arr = [
  {
    id: 0,
    img: "https://hoaphatsaigon.com/upload/quangcao/1-ban-lanh-dao-vip.jpg",
  },
  {
    id: 1,
    img: "https://hoaphatsaigon.com/upload/quangcao/5-series-ro.jpg",
  },
  {
    id: 2,
    img: "https://hoaphatsaigon.com/upload/quangcao/2-ghe-vip.jpg",
  },
  
 
];

function Information(props) {

  const [state, setState] = useState(0);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setState((prev) => prev + 1);
      if (state >= 2) {
        setState(0);
      }
    }, 4000);

    return () => clearTimeout(timerId);
  }, [state]);

  const handleChangeImageRight = () => {
    setState(state + 1);
    if (state >= 2) {
      setState(0);
    }
  };
  const handleChangeImageLeft = () => {
    setState(state - 1);
    if (state <= 0) {
      setState(2);
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <div className={props.classes.imgs}>
        <KeyboardDoubleArrowLeftSharpIcon
          color="background"
          onClick={handleChangeImageLeft}
        />
        {arr.map((prev) => {
          return state === prev.id ? (
            <img key={prev.id} src={prev.img} alt=" ảnh ghế" />
          ) : (
            ""
          );
        })}
        <KeyboardDoubleArrowRightSharpIcon
          color="background"
          onClick={handleChangeImageRight}
        />
      </div>
    </ThemeProvider>
  );
}
export default withStyles(styles)(Information);
