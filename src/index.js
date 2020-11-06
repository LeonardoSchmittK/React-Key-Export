import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import {App} from "./App";

const info = {
  username: "Robespierre",
  techs: [{name: " Ruby",id:2334}, {name: " JavaScript",id:10034}],
};

ReactDOM.render(
  <React.StrictMode>
    <App details={info} />
  </React.StrictMode>,
  document.getElementById("root")
);
