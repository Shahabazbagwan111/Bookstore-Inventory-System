import React, { Component } from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

class NavigationBar extends Component {
  render() {
    return (
      <Navbar bg="dark" variant="dark">
        <Link to={""} className="navbar-brand">
          {" "}
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/b/ba/Book_icon_1.png"
            width="25"
            height="25"
            alt="brand"
          />
        </Link>
        <Nav className="mr-auto">
        <Link to={""} className="nav-link">
            Home
          </Link>
          <Link to={"aboutus"} className="nav-link">
            About us
          </Link>
          <Link to={"login"} className="nav-link">
            Login
          </Link>
          {/* <Link to={"add"} className="nav-link">
            Add Book
          </Link>
          <Link to={"list"} className="nav-link">
            Book Listing
          </Link> */}
          {/* <Link to={"issueBook"} className="nav-link">
            Issue Book
          </Link> */}
        </Nav>
      </Navbar>
    );
  }
}

export default NavigationBar;
