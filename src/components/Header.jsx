import React, { useState } from "react";
import logo from "../assets/img/logo.jpg";
import Nav from "./Nav";
import User from "./User";

const Header = () => {
  const [scroll, setScroll] = useState("header__inner");
  window.addEventListener("scroll", (e) => {
    setScroll("header__inner header__inner-scroll");
  });

  return (
    <header className="header">
      <div className="container">
        <div className={scroll}>
          <div className="logo">
            <img src={logo} alt="logo" />
          </div>
          <Nav />
          <User />
        </div>
      </div>
    </header>
  );
};

export default Header;
