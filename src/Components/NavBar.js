import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

const NavBar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="navbar-brand">
        Horoscope App
      </Link>
      <ul className="navbar-links">
        <li className="navbar-link-item">
          <Link to="/zodiac-signs">Zodiac Signs</Link>
        </li>
        <li className="navbar-link-item">
          <Link to="/horoscope">Horoscope</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
