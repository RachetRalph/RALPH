import React, { Component } from "react";
import {Grid, Row, Col, Thumbnail} from "react-bootstrap"
import "../css/Work.css"

class Work extends Component {
  render() {
    return <Grid>
      <Row>
        <Col xs={6} md={4}>
          <Thumbnail href="#" src="/thumbnaildiv.png" alt="242x200">
            <h3>Thumbnail label</h3>
            <p>Description</p>
          </Thumbnail>
        </Col>
        <Col xs={6} md={4}>
          <Thumbnail href="#" src="/thumbnaildiv.png" alt="242x200">
            <h3>Thumbnail label</h3>
            <p>Description</p>
          </Thumbnail>
        </Col>
        <Col xs={6} md={4}>
          <Thumbnail href="#" src="/thumbnaildiv.png" alt="242x200">
            <h3>Thumbnail label</h3>
            <p>Description</p>
          </Thumbnail>
        </Col>
      </Row>
      <Row>
        <Col xs={6} md={4}>
          <Thumbnail href="#" src="/thumbnaildiv.png" alt="242x200">
            <h3>Thumbnail label</h3>
            <p>Description</p>
          </Thumbnail>
        </Col>
        <Col xs={6} md={4}>
          <Thumbnail href="#" src="/thumbnaildiv.png" alt="242x200">
            <h3>Thumbnail label</h3>
            <p>Description</p>
          </Thumbnail>
        </Col>
        <Col xs={6} md={4}>
          <Thumbnail href="#" src="/thumbnaildiv.png" alt="242x200">
            <h3>Thumbnail label</h3>
            <p>Description</p>
          </Thumbnail>
        </Col>
      </Row>
    </Grid>;
  }
}

export default Work;
