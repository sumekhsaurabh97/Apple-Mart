import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { removeItem } from "../actions/index";

const Cart = () => {
  const state = useSelector((state) => state.finalItems);
  const dispatch = useDispatch();
  const closeHandler = (item) => {
    dispatch(removeItem(item));
  };
  const cartItems = (cartItem) => {
    return (
      <>
        <div className="px-4 my-5 bg-light rounded-3">
          <div className="containerpy-4">
            <button
              onClick={() => closeHandler(cartItem)}
              className="btn-close float-end arial-label-close  mt-3"
            >
              {" "}
            </button>
            <div className="row justify-content-center">
              <div className="col-md-4">
                <img
                  src={cartItem.image}
                  alt={cartItem.title}
                  height="200px"
                  width="180px"
                />
              </div>
              <div className="col-md-4 mt-3">
                <h3>{cartItem.title}</h3>
                <p className="lead fw-bold">${cartItem.price}</p>
                <p>{cartItem.desc}</p>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };
  const emptyCart = () => {
    return (
      <>
        <div className="px-4 my-5 bg-light rounded-3 py-5">
          <div className="containerpy-4">
            <div className="row">
              <h2>Your Cart is Empty</h2>
            </div>
          </div>
        </div>
      </>
    );
  };
  const buttons = () => {
    return (
      <>
        <div className="container mb-5 w-25 mx-auto">
          <div className="row">
            <NavLink to="/Checkout" className="btn btn-outline-primary mb-5">
              {" "}
              Procced to Checkout
            </NavLink>
          </div>
        </div>
      </>
    );
  };

  return (
    <>
      {state.length === 0 && emptyCart()}
      {state.length !== 0 && state.map(cartItems)}
      {state.length !== 0 && buttons()}
    </>
  );
};

export default Cart;
