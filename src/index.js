import React from "react";
import ReactDOM from "react-dom";

import * as serviceWorker from "./serviceWorker";
import Portal from "./components/Portales";
import UseState from "./components/hooks/UseState-1";
import UseState2 from "./components/hooks/UseState-2";


ReactDOM.render(
  <React.StrictMode>
   <Portal />
   <UseState/>

   <UseState2 />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
