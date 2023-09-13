import React from "react";
import LoginForm from "../../components/LoginForm";

export default function Login() {
  return (
    <>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-4 col-lg-4 center-screen">
            <LoginForm />
          </div>
        </div>
      </div>
    </>
  );
}
