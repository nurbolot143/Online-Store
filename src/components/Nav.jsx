import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  const Item = (props) => {
    return (
      <li className="navbar__item">
        <Link to={`${props.to}`} className="navbar__link">
          {props.name}
        </Link>
      </li>
    );
  };

  return (
    <nav className="navbar">
      <ul className="navbar__list">
        <Item to="/men" name="Men" />
        <Item to="/women" name="Women" />
        <Item to="/kids" name="Kids" />
      </ul>
    </nav>
  );
};

export default Nav;
