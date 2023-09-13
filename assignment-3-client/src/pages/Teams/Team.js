import React from "react";

export default function Team() {
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-7 col-lg-7 center-screen">
          {/* Form Start */}
          <form className="card border-0 w-100 p-3">
            <div className="card-body">
              <h4 className="title">Create new team</h4>
              <hr />
              <div className="container-fluid m-0 p-0">
                <div className="row m-0 p-0">
                  {/* Team name */}
                  <div className="col-md-12 p-2">
                    <label className="form-label">Enter Team name</label>
                    <input
                      placeholder="Team name 1"
                      className="form-control animated fadeInUp"
                      type="text"
                    />
                  </div>
                </div>
                <div className="mt-2 p-2 d-flex align-items-end justify-content-end">
                  <button type="submit" className="btn p-2 btn-primary w-full">
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </form>
          {/* Form End */}
        </div>
      </div>
    </div>
  );
}
