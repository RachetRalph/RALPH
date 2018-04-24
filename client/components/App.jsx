import React, { Component } from "react";
import { Route, NavLink, HashRouter } from "react-router-dom";
import About from "./About.jsx";
import Work from "./Work.jsx";
import Contact from "./Contact.jsx";
import "../css/App.css";

class App extends Component {
  render() {
    return <HashRouter>
        <div>
          <h1>RALPH ANDRADE</h1>
          <h3>Full Stack Developer</h3>
          <ul className="header">
            <li>
              <NavLink exact to="/">
                ABOUT
              </NavLink>
            </li>
            <li>
              <NavLink to="/work">WORK</NavLink>
            </li>
            <li>
              <NavLink to="/contact">CONTACT</NavLink>
            </li>
          </ul>
          <div className="content">
            <Route exact path="/" component={About} />
            <Route path="/work" component={Work} />
            <Route path="/contact" component={Contact} />
          </div>
        </div>
      </HashRouter>;
  }
}

export default App;
