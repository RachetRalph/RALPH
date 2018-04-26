import React, { Component } from "react";
import { Row, Col, Image } from "react-bootstrap";
import "../css/About.css";

class About extends Component {
  render() {
    return <div className="content">
        <div className="ralph">
          <h2>ABOUT RALPH</h2>
          <p>
            Ralph, is a recent graduate from the University of Arizona, Full
            Stack Coding Boot-camp.
            Ralph is passionate about design & code, he consistently strives
            to stay current, in new technologies. His drive stems from his curiosity. He is eager to explore creative
            approaches to implement new and existing technologies.
          </p>
          <p>
            Front-end exprience: JavaScript, ReactJS, Bootstrap, jQuery,
            HTML, CSS
          </p>
          <p>
            Back-end exprience: Node.js, Express, MySQL, NoSQL (MongoDB,
            Firebase)
          </p>
        </div>
        ​<div className="social">
          <a href="https://github.com/RachetRalph" target="_blank">
            <img src="https://s25.postimg.cc/d556cxu57/social-github-outline.png" alt="social-github-outline" />
          </a> <a href="https://www.linkedin.com/in/ralphandrade/" target="_blank">
            <img src="https://s25.postimg.cc/xpa0bfhm3/social-linkedin-outline.png" alt="social-linkedin-outline" />
          </a> <a href="https://twitter.com/rachetralph88?lang=en" target="_blank">
            <img src="https://s25.postimg.cc/4a4c2exmz/social-twitter-outline.png" alt="social-twitter-outline" />
          </a>
        </div>
      </div>;
  }
}

export default About;
