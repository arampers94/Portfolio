import React from 'react';
import { Row, Col, Button } from 'reactstrap';

const Footer = (props) => {
  return (
    <div id="contact-info-section" className="project-block">
      <Row>
        <Col>
          <h1>Sound good? Let's get to work.</h1>
          <p>Connect with me on LinkedIn or send an email.</p>
          <a className="social-links" href="https://www.linkedin.com/in/amar-rampersaud/" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin fa-2x"></i>
          </a>{' '}
          <a className="social-links" href="mailto:arampers94@gmail.com">
            <i className="far fa-envelope fa-2x"></i>
          </a>
        </Col>
      </Row>
    </div>
  )
}

export default Footer;
