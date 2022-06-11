import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import { CssBaseline } from "@material-ui/core";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <Router>
        <CssBaseline/>
        <App />
      </Router>
    </React.StrictMode>
  </Provider>
);
