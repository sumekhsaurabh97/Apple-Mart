import React from "react";

export const Contact = () => {
  return (
    <>
      <div className="container my-3">
        <div className="row">
          <div className="col-12 text-center py-2 my-3">
            <h1>Ask Me Some Question</h1>
            <hr />
          </div>
        </div>
        <div className="row">
          <div className="col-md 5 d-flex justify-content-center p-5">
            <img
              src="./envalope.png"
              alt="contact"
              height="300px"
              width="300px"
            />
          </div>
          <div className="col-md-6">
            <form>
              <div className="mb-3">
                <label htmlFor="exampleForm" className="form-label">
                Full Name
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleForm"
                  placeholder="sumekh saurabh"
                />
              </div>
              <div className="mb-3">
                <label
                  htmlFor="exampleForm"
                  className="form-label"
                >
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="sumekhsaurabh97@gmail.com"
                />
              </div>
              <div className="mb-3">
                <label
                  htmlFor="exampleFormControlTextarea1"
                  className="form-label"
                >
                  Example textarea
                </label>
                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                ></textarea>
              </div>
                  <button type="submit" className="btn btn-outline-primary">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </>
   
  );
};
export default Contact;
