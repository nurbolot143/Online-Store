import React from "react";
import { Link } from "react-router-dom";
import User from "./User";

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

  console.log(props.class);

  return (
    <nav className={`header__menu ${props.isActiveClass}`}>
      <ul className="header__list">
        <Item to="/men" name="Men" />
        <Item to="/women" name="Women" />
        <Item to="/kids" name="Kids" />
      </ul>
      <User />
    </nav>
  );
};

export default Nav;
