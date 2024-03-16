import React from "react";
import { NavLink } from "react-router-dom";

export const About = () => {
  return (
    <>
      <div className="container my-4 py-4">
        <div className="row">
          <div className="col-md-6">
            <h1 className="text-primary fw-bold mb-3">About us</h1>
            <p className="lead mb-4">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam
              quisquam odit rem molestias sit, eos ea? Vel expedita atque amet
              reprehenderit voluptate sed veritatis ducimus, a reiciendis
              temporibus. Ducimus totam eaque quae. Vitae ducimus nam dolores
              doloremque. Amet pariatur rem voluptate cumque fugiat eius commodi
              qui, accusantium, voluptatem veritatis dolor ad cupiditate et
              soluta molestias minima unde inventore. Magnam repellendus
              repellat doloribus, libero corrupti autem ipsa odit magni eius
              laudantium esse quisquam voluptatem? Asperiores quae accusantium,
              non ab corrupti debitis impedit perspiciatis modi, perferendis sit
              minima maxime autem commodi totam expedita doloribus magni ipsam
              dolor? Aut illum sapiente unde Lorem ipsum dolor, sit amet
              consectetur adipisicing elit. Suscipit earum similique cum
              voluptatibus expedita optio illum quia quibusdam quis Lorem ipsum
              dolor sit amet consectetur adipisicing elit. Obcaecati tempore
              illo facilis molestias, accusantium sit numquam quam id ex.
            </p>
            <NavLink to="./Contact" className="btn btn-outline-primary px-3">
              {" "}
              Contact Us
            </NavLink>
          </div>
          <div className="col-md-6 d-flex justify-content-center my-5 py-5">
            <img
              src="./sebastian-herrmann-O2o1hzDA7iE-unsplash.jpg"
              alt="About Us"
              height="400px"
              width="400px"
            />
          </div>
        </div>
      </div>
    </>
  );
};
export default About;
