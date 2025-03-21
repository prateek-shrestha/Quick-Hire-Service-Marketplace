import React, { useState } from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom"; 
import "../styles/Navigation.css";


const Navigation = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  return (
    <>
      <Navbar expand="lg" className="custom-navbar container-fluid">
          <Navbar.Brand href="#home">
            <img src="/logo.png" alt="Quick Hire Logo" className="logo" />
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            onClick={toggleSidebar}
            className="hamburger-menu"
          />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto d-none d-lg-flex">
            <NavDropdown title="Find Professionals" id="nav-dropdown-1">
              <NavDropdown.Item href="#PostaJob">Post a Job</NavDropdown.Item>
              <NavDropdown.Item href="#BrowseTalents">Browse Talents</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Find Work" id="nav-dropdown-1">
              <NavDropdown.Item href="#FindWorkBasedOnYourSkills">Find Work Based On Your Skills</NavDropdown.Item>
              <NavDropdown.Item href="#ExploreDifferentFields">Explore Different Fields</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Why QuickHire" id="nav-dropdown-1">
              <NavDropdown.Item href="#HiringMadeEasy">Hiring Made Easy</NavDropdown.Item>
              <NavDropdown.Item href="#CustomerReviews">Customer Reviews</NavDropdown.Item>
              <NavDropdown.Item href="#KeyOfferings">Key Offerings</NavDropdown.Item>
            </NavDropdown>
              <Nav.Link as={Link} to="/login">Login</Nav.Link> 
              <Nav.Link as={Link} to="/get-started" className="get-started-btn">
                Get Started Here
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        
      </Navbar>

      {isSidebarOpen && (
        <div className="sidebar">
          <button className="close-btn" onClick={toggleSidebar}>
            ✖
          </button>
          <Nav className="flex-column">
            <Nav.Link href="#find-professionals">Find Professionals</Nav.Link>
            <Nav.Link href="#find-work">Find Work</Nav.Link>
            <Nav.Link href="#why-quickhire">Why QuickHire</Nav.Link>
            <Nav.Link as={Link} to="/login">Login</Nav.Link> {/* Use Link for Login */}
            <Nav.Link href="#get-started" className="get-started-btn">
              Get Started Here
            </Nav.Link>
          </Nav>
        </div>
      )}
    </>
  );
};

export default Navigation;