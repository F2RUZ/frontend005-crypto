import React from "react";
import "./App.scss";
import Navbar from "./components/navbar/Navbar";
import Intro from "./components/ui/intro/Intro";
import Crypto from "./components/ui/crypto/Crypto";
import Footer from "./components/footer/Footer";
const App = () => {
  return (
    <div>
      <Navbar />
      <Intro />
      <Crypto />

      <Footer />
    </div>
  );
};

export default App;
