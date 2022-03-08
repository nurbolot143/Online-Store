import React from "react";
import { Link } from "react-router-dom";
import UserNav from "./UserNav";

const Nav = (props) => {
  const Item = (prop) => {
    return (
      <li className="header__item">
        <Link to={`${prop.to}`} className="header__link">
          {prop.name}
        </Link>
      </li>
    );
  };

  return (
    <nav className={`header__menu ${props.isActiveClass}`}>
      <ul className="header__list">
        <Item to="/men" name="Men" />
        <Item to="/women" name="Women" />
        <Item to="/kids" name="Kids" />
      </ul>
      <UserNav />
    </nav>
  );
};

export default Nav;
