import React, { useState } from "react";
import "./LoginScreen.css";
import SignUpScreen from "./screens/SignUpScreen";
function Login() {
  const [signIn, setSignIn] = useState(false);

  return (
    <div className="loginScreen">
      <div className="loginScreen__background">
        <img
          className="loginScreen__logo"
          src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
          alt="logo"
        />
        <button className="loginScreen__button" onClick={() => setSignIn(true)}>
          Sign In
        </button>
        <div className="loginScreen__gradient"></div>
      </div>

      {signIn ? (
        <SignUpScreen />
      ) : (
        <div className="loginScreen__body">
          <>
            <h1>Unlimited films, TV programmes and more.</h1>
            <h2>Watch anywhere. Cancel Anytime.</h2>
            <h3>
              Ready to watch ? Enter your email to create or restart your
              membership.
            </h3>

            <div className="loginScreen__input">
              <form action="">
                <input type="email" placeholder="Enter your email address" />
                <button
                  className="loginScreen__getStarted"
                  onClick={() => setSignIn(true)}
                >
                  GET STARTED
                </button>
              </form>
            </div>
          </>
        </div>
      )}
    </div>
  );
}

export default Login;
