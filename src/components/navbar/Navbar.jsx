import React from "react";
import "./navbar.scss";
import logo from "../../img/IMAGE.png";
const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar__wrapper">
        <img className="navbar__logo" src={logo} alt="logo" />
        <ul className="navbar__list">
          <li className="navbar__item">
            <a href="" className="navbar__link">
              Home
            </a>
          </li>
          <li className="navbar__item">
            <a href="" className="navbar__link">
              Features
            </a>
          </li>
          <li className="navbar__item">
            <a href="" className="navbar__link">
              Reviews
            </a>
          </li>
          <li className="navbar__item">
            <a href="" className="navbar__link">
              Pricing
            </a>
          </li>
          <li className="navbar__item">
            <a href="" className="navbar__link">
              Contact
            </a>
          </li>
        </ul>

        <button className="navbar__btn">CrypAppy</button>

        <div className="navbar__burger">
          <i class="ri-menu-add-fill"></i>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
