import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/img/logo.jpg";
import Nav from "./Nav";
import User from "./User";

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header__inner">
          <Link to="/" className="logo">
            <img src={logo} alt="logo" />
          </Link>
          <Nav />
          <User />
        </div>
      </div>
    </header>
  );
};

export default Header;
