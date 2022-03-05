import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/img/logo.png";
import Nav from "./Nav";

const body = document.querySelector("body");

const Header = () => {
  const [activeClass, setactiveClass] = useState(false);
  const handleClick = () => {
    setactiveClass(!activeClass);
    body.classList.toggle("lock");
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header__inner">
          <Link to="/" className="header__logo logo">
            <img src={logo} alt="logo" />
          </Link>
          <Nav isActiveClass={activeClass ? "active" : ""} />
          <div
            className={activeClass ? `header__burger active` : "header__burger"}
            onClick={handleClick}
          >
            <span></span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
