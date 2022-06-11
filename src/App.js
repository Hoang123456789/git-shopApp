import React from "react";
import { ThemeProvider } from "@mui/material/styles"
import { theme } from "./common/Typography";
import Routers from "./routers/routers";

function App() {
  return (
  <ThemeProvider theme={theme}>
    <div className="App">
      <Routers />
    </div>
  </ThemeProvider>
  );
}

export default App;
