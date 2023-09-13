import React from "react";
import TaskForm from "../../components/TaskForm";

export default function Task() {
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-8 col-lg-8 center-screen">
          <TaskForm />
        </div>
      </div>
    </div>
  );
}
