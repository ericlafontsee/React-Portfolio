import React from "react";
import "./style.css";
import { Navbar, Nav } from "react-bootstrap";

function NavMenu() {
  return (
    <Navbar bg="dark">
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav>
          <Nav.Link  href="/about">
            About
          </Nav.Link>
          <Nav.Link href="/portfolio">
            Portfolio
          </Nav.Link>
          <Nav.Link href="/contact">
            Contact
          </Nav.Link>
          <Nav.Link href="/resume">
            Resume
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavMenu;
