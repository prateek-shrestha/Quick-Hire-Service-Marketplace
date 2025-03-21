import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../styles/ProfessionalProcess.css";

const steps = [
  { id: 1, text: "Sign Up and Create an Account as Professional" },
  { id: 2, text: "Pick Your Profession and complete the account setup" },
  { id: 3, text: "Verify your Account and Find the right job" },
  { id: 4, text: "Apply and Submit the Proposal" },
  { id: 5, text: "Complete the Job and Get Paid" }
];

const ProfessionalProcess = () => {
  return (
    <Container className="process-container">
      <h2 className="process-title">How It Works</h2>
      <p className="process-subtitle"><em>For Professionals</em></p>
      
      <Row className="justify-content-center">
        {steps.map((step, index) => (
          <Col xs={12} sm={6} md={4} lg={3} key={step.id} className={`process-step fade-in step-${index + 1}`}>
            <div className="step-circle">{step.id}</div>
            <p className="step-text">{step.text}</p>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ProfessionalProcess;
