import React from "react";

class Header extends React.Component {
  render() {
    return (
      <div className="fluid" id="header">
        <div class="jumbotron jumbotron-fluid">
          <div class="container">
            <h1 class="display-2">My First React App</h1>
            <p class="lead">Created by Muammar Alfien Zaidan</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
