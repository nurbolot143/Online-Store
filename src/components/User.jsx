import React, { useState } from "react";
import PersonIcon from "@mui/icons-material/Person";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
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
        <li className="user__item">
          <div className="person">
            <div
              onMouseEnter={handleShow}
              onMouseLeave={handleShow}
              className="person__wrapper"
            >
              <PersonIcon className="person__icon" fontSize="inherit" />
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
        <li className="user__item">
          <a href="/" className="user__link">
            <FavoriteIcon fontSize="inherit" />
          </a>
        </li>
        <li className="user__item">
          <a href="/" className="user__link">
            <ShoppingBagIcon fontSize="inherit" />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default User;
