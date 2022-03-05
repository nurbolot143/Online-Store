import React, { useState } from "react";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import { Link } from "@mui/material";

const User = () => {
  const [isShow, setIsShow] = useState(false);

  const handleShow = () => {
    setIsShow(!isShow);
  };

  const showClass = isShow ? "person__submenu-show" : "";

  return (
    <div className="user">
      <ul className="user__list">
        <li className="user__item user__person">
          <div className="person">
            <div
              onMouseEnter={handleShow}
              onMouseLeave={handleShow}
              className="person__wrapper"
            >
              <PersonOutlineIcon className="person__icon" fontSize="inherit" />
              <ul className={`person__submenu ${showClass}`}>
                <li className="person__submenu-item">
                  <Link>Pofile</Link>
                </li>
                <li className="person__submenu-item">
                  <Link>Log in</Link>
                </li>
                <li className="person__submenu-item">
                  <Link>Sing in</Link>
                </li>
                <li className="person__submenu-item">
                  <Link>Log out</Link>
                </li>
              </ul>
            </div>
          </div>
        </li>
        <div className="users">
          <li className="user__item">
            <a href="/" className="user__link">
              <FavoriteBorderIcon fontSize="inherit" />
            </a>
          </li>
          <li className="user__item">
            <a href="/" className="user__link">
              <ShoppingBagOutlinedIcon fontSize="inherit" />
            </a>
          </li>
        </div>
      </ul>
    </div>
  );
};

export default User;
