import React from "react";
import PersonIcon from "@mui/icons-material/Person";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";

const User = () => {
  const Item = (props) => {
    return (
      <li className="user__item">
        <a href="/" className="user__link">
          {props.children}
        </a>
      </li>
    );
  };
  return (
    <div className="user">
      <ul className="user__list">
        <Item>
          <PersonIcon fontSize="inherit" />
        </Item>
        <Item>
          <FavoriteIcon fontSize="inherit" />
        </Item>
        <Item>
          <ShoppingBagIcon fontSize="inherit" />
        </Item>
      </ul>
    </div>
  );
};

export default User;
