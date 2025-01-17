import React from "react";
import { Link } from "react-router-dom";
import style from "./header.module.scss";

function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/profile">Profile</Link>
          </li>
          <li>
          <Link to="/user">User</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
