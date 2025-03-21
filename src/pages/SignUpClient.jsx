import React from "react";
import { Button, Form, Row, Col, Container } from "react-bootstrap";
import "../styles/SignUpClient.css";

const SignUpClient = () => {
  return (
    <Container className="signup-client-container ">
      <div className="signup-box">
        <h2 className="signup-title">Sign Up To Hire a Talent</h2>

        <div className="social-buttons">
          <Button className="google-btn">
            <img src="/google.png" alt="Google-icon" className="icon" /> Continue with Google
          </Button>
          <Button className="apple-btn">
            <img src="/apple.png" alt="Apple-icon" className="icon" /> Continue with Apple
          </Button>
        </div>

        <div className="separator">
          <hr className="line" />
          <span className="or-text">OR</span>
          <hr className="line" />
        </div>

        <Form>
          <Row>
            <Col md={6}>
              <Form.Group controlId="firstName">
                <Form.Control type="text" placeholder="First Name" />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group controlId="lastName">
                <Form.Control type="text" placeholder="Last Name" />
              </Form.Group>
            </Col>
          </Row>

          <Form.Group controlId="email">
            <Form.Control type="email" placeholder="Email Address" />
          </Form.Group>

          <Form.Group controlId="password">
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>

          <Form.Group controlId="confirmPassword">
            <Form.Control type="password" placeholder="Confirm Password" />
          </Form.Group>

          <Form.Group className="checkbox-group">
            <Form.Check className="mycheck-box" type="checkbox" label="Send me emails with tips on how to find talent that fits my needs." />
            <Form.Check className="mycheck-box" type="checkbox" label="Yes, I understand and agree to the Quick Hire Terms of Service, including the User Agreement and Privacy Policy." />
          </Form.Group>

          <Button className="create-account-btn">Create My Account</Button>
        </Form>
        <p className="login-text">
          Already have an account? <a href="/login">Log In</a>
        </p>
      </div>
    </Container>
  );
};

export default SignUpClient;
