import React from 'react';
import { Row, Col, Button } from 'reactstrap';
import NelsonMurdock from '../../Resources/nelson-and-murdock.jpg'

const Project1 = (props) => {
  return (
    <div className="project-block">
      <Row>
        <Col sm="12" md="6" className="image-wrapper wow fadeInLeft">
          <div>
            <img src={NelsonMurdock} className="project-image" alt="Star Drug Pic" />
          </div>
        </Col>
        <Col sm="12" md="6" className="wow fadeInRight">
          <div className="project-desc">
            <h2 className="desc-title">
              Nelson and Murdock | Attorneys at Law
            </h2>
            <p className="desc-text">
              Website for a law firm based in Hell's Kitchen, New York City, NY.
              Nelson and Murdock is a fictional law firm based on the popular Netflix
              series, Daredevil. This is my concept for what their website would look
              like.
            </p>
            <p className="desc-subtext">
              Tools: React, Shards React, CSS, React Reveal, Wow.js
            </p>
            <Button outline color="primary" href="https://nelson-and-murdock-law-firm.firebaseapp.com/" target="_blank" rel="noopener noreferrer">
              View
            </Button>{' '}
            <Button outline color="success" href="https://github.com/arampers94/nelson-and-murdock-law-firm" target="_blank" rel="noopener noreferrer">
              Source
            </Button>{' '}
          </div>
        </Col>
      </Row>
    </div>
  )
}

export default Project1;
