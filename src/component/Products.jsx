import React from "react";
import Data from "../Api";
import { NavLink } from "react-router-dom";

export const Products = () => {
  const cartItem = (item) => {
    return (
      <div className="card my-4 py-2 mx-3 " style={{ width: "18rem", background :'#e7f6fb' }} key={item.id}>
        <img src={item.image} className="card-img-top" alt={item.title} />
        <div className="card-body text-center">
          <h5 className="card-title">{item.title}</h5>
          <p className="lead">${item.price}</p>
          <NavLink to={`/Products/${item.id}`} className="btn btn-outline-primary">
            Buy Now
          </NavLink>
        </div>
      </div>
    );
  };
  return (
    <>
      <div className="container py-1 my-2">
        <div className="row">
          <div className="col-12 text-center ">
            <h1>Products</h1>
            <hr />
          </div>
        </div>
      </div>

      <div className="container justify-content-around">
        <div className="row">{Data.map(cartItem)}</div>
      </div>
    </>
  );
};
export default Products;
