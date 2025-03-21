import React from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import { Search, Briefcase, User, TrendingUp } from "lucide-react";
import "../styles/Hero.css";

const Hero = () => {
  return (
    <div className="hero-section">
      <Container>
        <Row className="text-center">
          <Col md={10} lg={8} className="mx-auto">
            <h1 className="hero-title">Empower Your Career</h1>
            <p className="hero-subtitle">
              Join Quick Hire and access a world of opportunities. Showcase your skills, find projects, and grow your career.
            </p>

            <div className="hero-buttons">
              <Button variant="primary" className="join-btn">Join Now</Button>
              <Button variant="outline-primary" className="learn-btn">Learn More</Button>
            </div>
          </Col>
        </Row>

        <Row className="justify-content-center">
          <Col md={8} lg={6} className="position-relative">
            <Form className="search-form">
              <Search className="search-icon" />
              <input type="text" placeholder="Search for skills, jobs, or professionals..." />
              <Button variant="primary" className="search-btn">Search</Button>
            </Form>
          </Col>
        </Row>

        <Row className="stats-row">
          <Col xs={12} md={4} className="stats-item">
            <Briefcase className="icon" />
            <span>10,000+ Jobs</span>
          </Col>
          <Col xs={12} md={4} className="stats-item">
            <User className="icon" />
            <span>5,000+ Professionals</span>
          </Col>
          <Col xs={12} md={4} className="stats-item">
            <TrendingUp className="icon" />
            <span>95% Success Rate</span>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Hero;
