import React, { Component } from "react";
import { Navbar } from "react-bootstrap";
import "../css/TopNav.css";


class TopNav extends Component {
  render() {
    return <div>
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#">RALPH ANDRADE</a>
            </Navbar.Brand>
          </Navbar.Header>
        </Navbar>
      </div>;
  }
}

export default TopNav;
