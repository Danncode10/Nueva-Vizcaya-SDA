import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar as BSNavbar, Nav, Container, NavDropdown } from 'react-bootstrap';

const Navbar: React.FC = () => {
  return (
    <BSNavbar expand="lg" className="shadow-md bg-accent">
      <Container>
        <BSNavbar.Brand as={Link} to="/" className="text-lg font-bold text-primary">
          SDA Nueva Vizcaya
        </BSNavbar.Brand>
        <BSNavbar.Toggle aria-controls="basic-navbar-nav" />
        <BSNavbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/" className="text-primary hover:text-secondary px-3 py-2">
              Home
            </Nav.Link>
            <NavDropdown title="Ministries" id="basic-nav-dropdown" className="text-primary hover:text-secondary px-3 py-2">
              <NavDropdown.Item as={Link} to="/mission-stories">Mission Stories</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/sermons">Sermons</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/lesson-reviews">Lesson Reviews</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/afternoon-service">Afternoon Service</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/youth">Youth</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/health">Health</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={Link} to="/calendar" className="text-primary hover:text-secondary px-3 py-2">
              Calendar
            </Nav.Link>
            <Nav.Link as={Link} to="/about-contact" className="text-primary hover:text-secondary px-3 py-2">
              About & Contact
            </Nav.Link>
            {/* Conditionally show Login or Admin Dashboard based on user role */}
            <Nav.Link as={Link} to="/login" className="text-primary hover:text-secondary px-3 py-2">
              Login
            </Nav.Link>
            <Nav.Link as={Link} to="/admin-dashboard" className="text-primary hover:text-secondary px-3 py-2">
              Admin Dashboard
            </Nav.Link>
          </Nav>
        </BSNavbar.Collapse>
      </Container>
    </BSNavbar>
  );
};

export default Navbar;
