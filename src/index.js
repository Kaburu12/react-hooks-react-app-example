import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import "./index.css";

ReactDOM.render(<App />, document.getElementById("root"));

const header = <h1 className="main">Hello from React!</h1>;

ReactDOM.render(header, document.querySelector("#container"));