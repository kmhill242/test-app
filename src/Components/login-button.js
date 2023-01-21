import React from "react";

export default class LoginButton extends React.Component {
  //render method is where we define what the component will look like/what HTML will
  //  be rendered to the application screen

  render() {
    return (
      <button type="button" className="btn btn-primary">
        Log In
      </button>
    );
  }
}
