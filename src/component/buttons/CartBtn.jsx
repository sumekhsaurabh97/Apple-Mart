import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
// import Cart from "./componant/Cart";

export const CartBtn = () => {
  const state = useSelector((state) => state.finalItems);
  return (
    <>
      <NavLink to="/Cart" className="btn btn-outline-primary ms-2">
        <span className="fa fa-shopping-cart me-1"></span> Cart ({state.length})
      </NavLink>
     
    </>
  );
};
export default CartBtn;

