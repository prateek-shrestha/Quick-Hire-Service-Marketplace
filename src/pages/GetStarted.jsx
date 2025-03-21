import React, { useState } from "react";
import { Container, Row, Col, Button, Card, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "../styles/GetStarted.css";

const GetStarted = () => {
  const [userType, setUserType] = useState("client"); // Default selection: Client
  const navigate = useNavigate();

  const handleCreateAccount = () => {
    if (userType === "client" || userType === "professional") {
      navigate("/signup-client"); // Redirects to SignUpClient.jsx
    }
  };

  return (
    <div className="get-started-page">
      <Container className="d-flex flex-column align-items-center">
        <h2 className="title">
          Join as a <span className="client">Client</span> or{" "}
          <span className="professional">Professional.</span>
        </h2>

        <Row className="option-container">
          <Col md={6} className="option">
            <Card
              className={`user-card ${userType === "client" ? "selected" : ""}`}
              onClick={() => setUserType("client")}
            >
              <Card.Body>
                <Form.Check
                  type="radio"
                  label="I'm a Client. Looking to Hire"
                  checked={userType === "client"}
                  onChange={() => setUserType("client")}
                />
              </Card.Body>
            </Card>
          </Col>

          <Col md={6} className="option">
            <Card
              className={`user-card ${userType === "professional" ? "selected" : ""}`}
              onClick={() => setUserType("professional")}
            >
              <Card.Body>
                <Form.Check
                  type="radio"
                  label="I'm a Professional. Looking for work"
                  checked={userType === "professional"}
                  onChange={() => setUserType("professional")}
                />
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Button className="create-account-btn" onClick={handleCreateAccount}>
          Create Account
        </Button>

        <p className="login-text">
          Already have an account? <a href="/login">Login</a>
        </p>
      </Container>
    </div>
  );
};

export default GetStarted;
