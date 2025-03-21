import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../styles/Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faLinkedin, faYoutube, faXTwitter } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="footer-sections">
          <Col md={3} sm={6} xs={12} className="footer-column">
            <h5>For Professionals</h5>
            <ul>
              <li><a href="#">How to find work</a></li>
              <li><a href="#">Create a Profile</a></li>
              <li><a href="#">Get Verified</a></li>
              <li><a href="#">Get Paid Securely</a></li>
            </ul>
          </Col>
          <Col md={3} sm={6} xs={12} className="footer-column">
            <h5>For Clients</h5>
            <ul>
              <li><a href="#">How to hire</a></li>
              <li><a href="#">Post a Job</a></li>
              <li><a href="#">Browse Professionals</a></li>
              <li><a href="#">Secure Payments</a></li>
              <li><a href="#">Manage Projects</a></li>
            </ul>
          </Col>
          <Col md={3} sm={6} xs={12} className="footer-column">
            <h5>Resources</h5>
            <ul>
              <li><a href="#">Help and Support</a></li>
              <li><a href="#">Quick Hire Reviews</a></li>
              <li><a href="#">Blogs</a></li>
            </ul>
          </Col>
          <Col md={3} sm={6} xs={12} className="footer-column">
            <h5>Quick Links</h5>
            <ul>
              <li><a href="#">About Us</a></li>
              <li><a href="#">How It Works</a></li>
              <li><a href="#">FAQs</a></li>
              <li><a href="#">Contact Us</a></li>
            </ul>
          </Col>
        </Row>

        <Row className="social-media-row text-center mt-4">
          <Col xs={12}>
            <p>Follow us:</p>
            <div className="social-icons">
              <a href="#"><FontAwesomeIcon icon={faLinkedin} /></a>
              <a href="#" ><FontAwesomeIcon icon={faXTwitter} /></a>
              <a href="#" ><FontAwesomeIcon icon={faFacebook} /></a>
              <a href="#" ><FontAwesomeIcon icon={faYoutube} /></a>
            </div>
          </Col>
        </Row>

        <Row className="footer-bottom text-center mt-4">
          <div className="logo">
            
          </div>
          <Col xs={12}>
            © 2025 Quick Hire Global Inc.
            &nbsp;|&nbsp;
            <a href="#" className='qpolicyies'>Privacy Policy</a>&nbsp;|&nbsp;
            <a href="#" className='qpolicyies'>Terms of Services</a>&nbsp;|&nbsp;
            <a href="#" className='qpolicyies'>Cookie Settings</a>


            <div className="mt-4"><strong>Download App Here :</strong>
              <img src="./googleplay.png" alt="Google Play" className="app-icon" />
              &nbsp;
              <img src="/appstore.png" alt="App Store" className="app-icon" />
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
