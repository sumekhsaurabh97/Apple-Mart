import React from "react";
import { NavLink } from "react-router-dom";
import LogIn from "./buttons/LogIn";
import SignUp from "./buttons/SignUp";
import CartBtn from "./buttons/CartBtn";

export const Header = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-dark ">
        <div className="container-fluid py-2">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink
                  className="nav-link fw-bolder text-light"
                  aria-current="page"
                  to="/"
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link fw-bolder text-light" to="/About">
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link fw-bolder text-light"
                  to="/Contact"
                >
                  Contact
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link  fw-bolder text-light"
                  to="/Products"
                >
                  Products
                </NavLink>
              </li>
            </ul>
            <NavLink
              className="navbar-brand fw-bold mx-auto speace"
              to="/"
              style={{ color: "#ff1f88", letterSpacing: 5 }}
            >
              APPLE STORE
            </NavLink>
            <LogIn />
            <SignUp />
            <CartBtn />
            {/* <but className=" icon   bg-light"><span className="fa */}
            {/* <div className="icon mx-2"><span className="fa fa-bell" style={{color:'blue'}}></span></div> */}
            <button type="button" className="btn btn-outline-primary ms-2">
              {" "}
              <span
                className="fa fa-bell icon"
                style={{ color: "blue" }}
              ></span>
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};
export default Header;
