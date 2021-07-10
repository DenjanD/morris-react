import React from "react";

class Navbar extends React.Component {
  render() {
    return (
      <div className="wrapper">
        <div className="fluid">
          <nav class="navbar navbar-expand-lg navbar-dark bg-transparent fixed-top">
            <a class="navbar-brand" href="#">
              ammarzaidan
            </a>
            <button
              class="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
              <ul class="navbar-nav mr-auto">
                <li>
                  <a class="nav-item nav-link" href="#">
                    Home <span class="sr-only"></span>
                  </a>
                </li>
                <li>
                  <a class="nav-item nav-link" href="#about">
                    About
                  </a>
                </li>
                <li>
                  <a class="nav-item nav-link" href="#expertise">
                    Expertise
                  </a>
                </li>
                <li>
                  <a class="nav-item nav-link" href="#contacts">
                    Contacts
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    );
  }
}

export default Navbar;
