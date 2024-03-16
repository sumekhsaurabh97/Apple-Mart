import React from "react";
import { useParams } from "react-router-dom";
import Data from "../Api";
import { useState } from "react";
// import Products from "./Products";
import { useDispatch } from "react-redux";
import { addItem, removeItem, RemoveItem } from "../actions/index";

const ProductDetails = () => {
  const [cartBtn, setCartBtn] = useState("Add to Cart");
  const productId = useParams();
  const productDetailed = Data.filter((x) => x.id == productId.id);
  const Product = productDetailed[0];

  const dispatch = useDispatch(); 
  const cartHandler = (products) => {
    if (cartBtn === "Add to Cart") {
      dispatch(addItem(products))
      setCartBtn("Remove from Cart ");
    } else {
      dispatch(removeItem(products))
      setCartBtn("Add to Cart ");
    }
  };

  return (
    <>
      <div className="container my-5 py-3">
        <div className="row">
          <div className="col-md-6 d-flex justify-content-center mx-auto product">
            <img src={Product.image} alt={Product.title} />
          </div>
          <div className="col-md-6 d-flex justify-content-center flex-column">
            <h1 className="display-5 fw-bold">{Product.title} </h1>
            <hr />
            <h2 className="my-4">${Product.price} </h2>
            <p className="lead">{Product.desc} </p>
            <button
              onClick={() => cartHandler(Product)}
              className="btn btn-outline-primary my-5"
            >
              {cartBtn}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
