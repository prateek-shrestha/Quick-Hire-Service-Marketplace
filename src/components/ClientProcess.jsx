import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "../styles/clientprocess.css";

const steps = [
  { id: 1, text: "Sign Up and Create Your Account as Client" },
  { id: 2, text: "Post Your Job according to your Budget or Find the Talent" },
  { id: 3, text: "Communicate with the professionals and pay afterwards" },
];

const ClientProcess = () => {
  return (
    <Container className="client-process-container">
      <h2 className="text-center">For Clients</h2>
      <Row className="justify-content-center">
        {steps.map((step) => (
          <Col key={step.id} md={4} className="d-flex justify-content-center">
            <Card className="process-card">
              <div className="step-number">{step.id}</div>
              <Card.Body>
                <Card.Text>{step.text}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ClientProcess;
