import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "../styles/Offerings.css";

const Hero = () => {
  return (
    <Container className="hero-container">
      <h1 className="hero-title">Key Offerings</h1>
      <Row className="justify-content-center gx-4">
        <Col xs={12} sm={6} md={4} lg={3} className="d-flex justify-content-center">
          <Card className="custom-card">
            <Card.Img
              variant="top"
              src="https://img.icons8.com/pastel-glyph/128/search--v1.png"
              alt="Smart-Search"
              className="card-img"
            />
            <Card.Body>
              <Card.Title>Smart Search</Card.Title>
              <Card.Text>
                AI-powered search and recommendations connect clients with the right professionals instantly.
              </Card.Text>
              <Button variant="secondary">Learn More</Button>
            </Card.Body>
          </Card>
        </Col>

        <Col xs={12} sm={6} md={4} lg={3} className="d-flex justify-content-center">
          <Card className="custom-card">
            <Card.Img
              variant="top"
              src="https://img.icons8.com/ios-filled/50/verified-account.png"
              alt="Verified-Badge"
              className="card-img"
            />
            <Card.Body>
              <Card.Title>Verified Badge</Card.Title>
              <Card.Text>
                Professionals undergo screening to earn a verified badge, ensuring quality and trust.
              </Card.Text>
              <Button variant="secondary">Learn More</Button>
            </Card.Body>
          </Card>
        </Col>

        <Col xs={12} sm={6} md={4} lg={3} className="d-flex justify-content-center">
          <Card className="custom-card">
            <Card.Img
              variant="top"
              src="https://img.icons8.com/ios/50/filled-chat.png"
              alt="Integrated-Chat"
              className="card-img"
            />
            <Card.Body>
              <Card.Title>Integrated Chat</Card.Title>
              <Card.Text>
                Built-in messaging allows instant communication, file sharing, and job discussions.
              </Card.Text>
              <Button variant="secondary">Learn More</Button>
            </Card.Body>
          </Card>
        </Col>

        <Col xs={12} sm={6} md={4} lg={3} className="d-flex justify-content-center">
          <Card className="custom-card">
            <Card.Img
              variant="top"
              src="https://img.icons8.com/external-vectorslab-glyph-vectorslab/53/external-Job-Management-project-management-vectorslab-glyph-vectorslab.png"
              alt="Job-Management"
              className="card-img"
            />
            <Card.Body>
              <Card.Title>Job Management Dashboard</Card.Title>
              <Card.Text>
                A streamlined dashboard to track applications, ongoing projects, and completed jobs.
              </Card.Text>
              <Button variant="secondary">Learn More</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Hero;
