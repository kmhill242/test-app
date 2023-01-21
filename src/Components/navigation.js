import React from "react";

export default class Navigation extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-expand-sm navbar-light bg-light">
        <a className="navbar-brand" href="#navbar">
          Navbar
        </a>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <a className="nav-link" href="#home">
                Home 
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#about">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#Retreats">
                Retreats
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contactUs">
                Contact Us
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#tours">
                Tours
              </a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
