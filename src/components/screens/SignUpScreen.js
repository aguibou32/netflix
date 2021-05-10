import React from "react";
import "./SignUpScreen.css";

function SignUpScreen() {
  return (
    <div className="signupScreen">
      <form action="">
        <h1>Sign Up</h1>
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button className="" type="submit">
          Sign Up
        </button>
      </form>
    </div>
  );
}

export default SignUpScreen;
