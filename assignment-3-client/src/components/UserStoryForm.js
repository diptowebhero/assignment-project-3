import React from "react";

export default function UserStoryForm() {
  return (
    <form className="card animated fadeIn w-100 p-3">
      <div className="card-body">
        <h4 className="title">Create user story</h4>
        <hr />
        <div className="container-fluid m-0 p-0">
          <div className="row m-0 p-0">
            {/* User Story */}
            <div className="col-md-12 p-2">
              <label className="form-label">User Story</label>
              <textarea
                placeholder="Enter User Story"
                className="form-control"
                type="text"
              />
            </div>
            {/* Priority  */}
            <div className="col-md-12 p-2">
              <label className="form-label">Priority </label>
              <input
                placeholder="Enter Priority"
                className="form-control"
                type="number"
              />
            </div>
            {/* Project  */}
            <div className="col-md-12 p-2">
              <label className="form-label">Project</label>
              <select
                className="form-select form-control"
                aria-label="Default select example"
              >
                <option selected disabled>
                  Select Project
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
