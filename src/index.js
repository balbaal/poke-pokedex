import React from "react";
import ReactDOM from "react-dom";
import "./assets/css/style.sass";
import * as serviceWorker from "./serviceWorker";

// Routing
import { Routing } from "configs";

ReactDOM.render(
  <React.StrictMode>
    <Routing />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
