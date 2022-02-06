import React from "react";

const Nav = () => {
  const Item = (props) => {
    return (
      <li className="navbar__item">
        <a href="/" className="navbar__link">
          {props.name}
        </a>
      </li>
    );
  };

  return (
    <nav className="navbar">
      <ul className="navbar__list">
        <Item name="Men" />
        <Item name="Women" />
        <Item name="Kids" />
      </ul>
    </nav>
  );
};

export default Nav;
