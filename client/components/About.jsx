import React, { Component } from "react";
import {Row, Col, Image} from 'react-bootstrap';
import "../css/about.css";

class About extends Component {
  render() {
    return (
      <div>
        <h2>ABOUT</h2>
        <div className="ralph">
          <Row>
            <Col xs={6} md={4}>
              <Image src="/ralph.png" circle />
            </Col>
          </Row>
        </div>
        <p>
          Cras facilisis urna ornare ex volutpat, et convallis erat elementum.
          Ut aliquam, ipsum vitae gravida suscipit, metus dui bibendum est, eget
          rhoncus nibh metus nec massa. Maecenas hendrerit laoreet augue nec
          molestie. Cum sociis natoque penatibus et magnis dis parturient
          montes, nascetur ridiculus mus.
        </p>
        <p>
          Cras facilisis urna ornare ex volutpat, et convallis erat elementum.
          Ut aliquam, ipsum vitae gravida suscipit, metus dui bibendum est, eget
          rhoncus nibh metus nec massa. Maecenas hendrerit laoreet augue nec
          molestie. Cum sociis natoque penatibus et magnis dis parturient
          montes, nascetur ridiculus mus.
        </p>
        <p>Duis a turpis sed lacus dapibus elementum sed eu lectus.</p>
      </div>
    );
  }
}

export default About;
