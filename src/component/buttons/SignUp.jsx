import React from "react";

export const SignUp = () => {
  return (
    <>
      {/* <!-- Button trigger modal --> */}
      <button
        type="button"
        className="btn btn-outline-primary ms-2"
        data-bs-toggle="modal"
        data-bs-target="#signupModel"
      >
        {" "}
        <span className="fa fa-user-plus me-1 "></span>Register
        
      </button>

      {/* <!-- Modal --> */}
      <div
        className="modal fade"
        id="signupModel"
        tabIndex="-1"
        aria-labelledby="signupModelLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="signupModelLabel">
                LogIn
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <button className="btn btn-primary w-100 mb-4">
              {" "}
              <span className="fa fa-google me-2"></span> Sign in with google
            </button>
            <button className="btn btn-primary w-100 mb-4">
              {" "}
              <span className="fa fa-google m-2"></span> Sign in with facbook
            </button>
            <div className="modal-body">
              <form>
                <div className="mb-3">
                  <label htmlFor="exampleInputEmail1" className="form-label">
                    Email address
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                  />
                  <div id="emailHelp" className="form-text">
                    We'll never share your email with anyone else.
                  </div>
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleInputPassword1" className="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="exampleInputPassword1"
                  />
                </div>
                <div className="mb-3 form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="exampleCheck1"
                  />
                  <label className="form-check-label" htmlFor="exampleCheck1">
                    Check me out
                  </label>
                </div>
                <button
                  type="submit"
                  className="btn btn-outline-primary w-100 mt-5"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default SignUp;
