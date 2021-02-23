import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import AOS from "aos";
import "aos/dist/aos.css";
import "./index.css";
import "./Tab.css";
import "./responsive.css";

AOS.init({
  duration: 900,
});
ReactDOM.render(
  <>
    <App />
  </>,
  document.querySelector("#root")
);
