import React from "react";
import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./pages/Home";
import Men from "./pages/Men";
import Women from "./pages/Women";
import Kids from "./pages/Kids";
import "./App.scss";

const App = () => {
  return (
    <div className="App">
      <Header isLock />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="men" element={<Men />} />
        <Route path="women" element={<Women />} />
        <Route path="kids" element={<Kids />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
