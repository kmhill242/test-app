import React from "react";
import LoginButton from "./login-button";

export default class LoginForm extends React.Component {
  render() {
    return (
      <div className="card w-25" id="loginForm">
        <div className="card-header text-black text-center">
          <h3>Welcome</h3>
          <br></br>
          <h3>Log In Here!</h3>
        </div>
        <form>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            placeholder="Enter your email"
            id="email"
            name="email"
          />
          <br></br>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            placeholder="Enter your password"
            id="password"
            name="password"
          /><br></br>
          <LoginButton />
        </form>
      </div>
    );
  }
}
