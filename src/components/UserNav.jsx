import React, { useState } from "react";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import { Link } from "react-router-dom";

const UserNav = () => {
  return (
    <div className="userNav">
      <ul className="userNav__list">
        <li className="userNav__item">
          <Link to="/user" className="userNav__link">
            <PersonOutlineIcon fontSize="inherit" />
          </Link>
        </li>
        <li className="userNav__item">
          <Link to="/" className="userNav__link">
            <FavoriteBorderIcon fontSize="inherit" />
          </Link>
        </li>
        <li className="userNav__item">
          <Link to="/" className="userNav__link">
            <ShoppingBagOutlinedIcon fontSize="inherit" />
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default UserNav;
