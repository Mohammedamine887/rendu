import React from "react";
import { NavLink } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";

const NavBar = () => {
  return (
    <Navbar bg="light" expand="lg">
      
      
        <Nav className="mr-auto">
          <NavLink className="nav-link" exact to="/events">
            Events
          </NavLink>
          <NavLink className="nav-link" to="/counter">
          Counter
          </NavLink>
        </Nav>
    </Navbar>
  );
};

export default NavBar;
