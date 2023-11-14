import React from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <header className="header_section">
        <nav className="navbar navbar-expand-lg custom_nav-container ">
          <Link className="navbar-brand" to="/">
            <span>Jawil</span>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav  ">
              <NavLink activeClassName="active" className="nav-item" to="/">
                <li className="nav-link">
                  Home
                  <span className="sr-only">(current)</span>
                </li>
              </NavLink>
              <NavLink className="nav-item" to="shop">
                <li className="nav-link">Shop</li>
              </NavLink>
              <NavLink className="nav-item" to="cars">
                <li className="nav-link">Cars</li>
              </NavLink>
              <NavLink className="nav-item" to="why">
                <li className="nav-link">Why Us</li>
              </NavLink>
              <NavLink className="nav-item" to="contact">
                <li className="nav-link">Contact Us</li>
              </NavLink>
            </ul>
            <div className="user_option">
              <Link to>
                <i className="fa fa-user" aria-hidden="true" />
                <span>Login</span>
              </Link>
              <Link to>
                <i className="fa fa-shopping-bag" aria-hidden="true" />
              </Link>
              <form className="form-inline ">
                <button className="btn nav_search-btn" type="submit">
                  <i className="fa fa-search" aria-hidden="true" />
                </button>
              </form>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Header;
