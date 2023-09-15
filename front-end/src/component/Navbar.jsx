import React from 'react';
import {Navbar, Button, Nav} from 'react-bootstrap';

const NavBar = () => {
  return (
    <div>
      
      <Navbar bg="primary" variant="info">
        <div className="container-fluid">
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </div>
      </Navbar>

    </div>
  )
}

export default NavBar