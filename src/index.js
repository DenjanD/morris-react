import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

//import css
import "bootstrap/dist/css/bootstrap.css";
import "./style.css";

//import components
import Navbar from "./components/navbar";
import Header from "./components/header";
import Content from "./components/content";
import Footer from "./components/footer";

ReactDOM.render(
  <React.Fragment>
    <Navbar />
    <Header />
    <Content />
    <Footer />
  </React.Fragment>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
