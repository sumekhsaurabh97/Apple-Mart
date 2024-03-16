import React from "react";
import Products from "./Products";

export const Home = () => {
  return (
    <>
      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="3"
            aria-label="Slide 4"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="./luca-bravo-9l_326FISzk-unsplash.jpg"
              className="d-block w-100"
              alt="phone"
              height="400px"
            />
          </div>
          <div className="carousel-item">
            <img
              src="./arnel-hasanovic-4oWSXdeAS2g-unsplash.jpg"
              className="d-block w-100"
              alt="phone"
              height="400px"
            />
          </div>
          <div className="carousel-item">
            <img
              src="./simon-daoudi-2wFoa040m8g-unsplash (2).jpg"
              className="d-block w-100"
              alt="phone"
              height="400px"
            />
          </div>
          <div className="carousel-item">
            <img
              src="./ready5.jpg"
              className="d-block w-100"
              alt="phone"
              height="400px"
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
        <Products />
      </div>
    </>
  );
};
export default Home;
