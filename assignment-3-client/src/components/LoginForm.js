import React from "react";

export default function LoginForm() {
  return (
    <>
      <form className="card border-0 w-100 p-3">
        <div className="card-body">
          <h4 className="title">Login</h4>
          <hr />
          <div className="container-fluid m-0 p-0">
            <div className="row m-0 p-0">
              {/* User Name */}
              <div className="col-md-12 p-2">
                <label className="form-label">User Name</label>
                <input
                  placeholder="User Name"
                  className="form-control"
                  type="text"
                />
              </div>
              {/* Password */}
              <div className="col-md-12 p-2">
                <label className="form-label">Password</label>
                <input
                  type="password"
                  placeholder="User Password"
                  className="form-control"
                />
              </div>
            </div>
            <div className="mt-2 p-2 d-flex align-items-end justify-content-center">
              <button type="submit" className="btn p-2 btn-primary w-full">
                Submit
              </button>
            </div>
            <div class="text-center card_footer mt-3">
              <span>
                <a class="text-center ms-1" href="/signup">
                  Don't have an account? Please Sign Up{" "}
                </a>
              </span>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}
