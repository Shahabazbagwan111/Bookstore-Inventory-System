import React, { Component } from "react";
import { Container, Row, Jumbotron, Col, Navbar } from "react-bootstrap";

export default class Footer extends Component {
  render() {
    return (
       <Navbar fixed="bottom" bg="primary" variant="dark">
        <Container>
          <Col lg={12} className="text-center text-muted">
            { <div>Bookstore Inventory System</div> }
          </Col>
        </Container>
       </Navbar>
    );
  }
}
