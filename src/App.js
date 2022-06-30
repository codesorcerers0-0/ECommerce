import { BrowserRouter as Router } from "react-router-dom";
import WebFont from "webfontloader";
import React, { useEffect } from "react";
import "./App.css";
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
    <Router>
      <Header />
      {/* //home */}
      <Home/>
      <Footer />
    </Router>
  );
}

export default App;
