import React from "react";
import UserStoryForm from "../../components/UserStoryForm";

export default function UserStory() {
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-7 col-lg-7 center-screen">
          <UserStoryForm />
        </div>
      </div>
    </div>
  );
}
