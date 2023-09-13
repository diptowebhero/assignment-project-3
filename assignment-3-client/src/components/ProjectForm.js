import React from "react";

export default function ProjectForm() {
  return (
    <form className="card border-0 w-100 p-3">
      <div className="card-body">
        <h4 className="title">Create New Project</h4>
        <hr />
        <div className="container-fluid m-0 p-0">
          <div className="row m-0 p-0">
            {/* Project Name */}
            <div className="col-md-6 p-2">
              <label className="form-label">Project Name</label>
              <input
                placeholder="Enter Your Project Name"
                className="form-control"
                type="text"
              />
            </div>
            {/* Project Description */}
            <div className="col-md-6 p-2">
              <label className="form-label">Project Description</label>
              <textarea
                placeholder="Enter Your Project Description"
                className="form-control"
                type="text"
                rows="1"
              />
            </div>
            {/* Product Owner */}
            <div className="col-md-6 p-2">
              <label className="form-label">Product Owner</label>
              <select
                className="form-select form-control"
                aria-label="Default select example"
              >
                <option selected disabled>
                  Select Product Owner
                </option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
            {/* Manger */}
            <div className="col-md-6 p-2">
              <label className="form-label">Manger</label>
              <select
                className="form-select form-control"
                aria-label="Default select example"
              >
                <option selected disabled>
                  Select manager
                </option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
            {/* Team */}
            <div className="col-md-12 p-2">
              <label className="form-label">Team</label>
              <select
                className="form-select form-control"
                aria-label="Default select example"
              >
                <option selected disabled>
                  Select your team
                </option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
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
  );
}
