import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

// import App from "./App";

window.Transform = require("css3transform").default;
const App = require("./App").default;

ReactDOM.render(<App />, document.getElementById("root"));
