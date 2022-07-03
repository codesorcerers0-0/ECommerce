import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React, { useEffect } from "react";
import "./App.css";
import WebFont from "webfontloader";
import Header from "./component/layout/Header/Header";
import Footer from "./component/layout/Footer/Footer";
import Home from "./component/Home/Home";

function App() {
  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Roboto", "Droid Sans"],
      },
    });
  }, []);

  return (
    <>
      <Router>
        {/* <Routes> */}
        <Header />
        <Home />
        <Footer />
        {/* <Route path="/" element={<Header />}></Route>
          <Route path="/" element={<Home />}></Route>
          <Route path="/" element={<Footer />}></Route> */}
        {/* </Routes> */}
      </Router>
    </>
  );
}

export default App;
