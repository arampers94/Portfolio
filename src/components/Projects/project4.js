import React from 'react';
import { Row, Col, Button } from 'reactstrap';
import Portfolio from '../../Resources/portfolio.png';

const Project4 = (props) => {
  return (
    <div className="project-block">
      <Row id="project-4">
        <Col sm="12" md="6" className="wow fadeInLeft">
          <div className="project-desc">
            <h2 className="desc-title">
              This Portfolio
            </h2>
            <p className="desc-text">
              This portfolio is also one of my projects! The design is simple and intuitive, making it easy to
              find the important stuff and a pleasure to read. Source code available on my Github page.
            </p>
            <p className="desc-subtext">
              Tools: React, Reactstrap, CSS.
            </p>
            <Button outline color="success" href="https://github.com/arampers94/Portfolio" target="_blank" rel="noopener noreferrer">
              Source
            </Button>{' '}
          </div>
        </Col>
        <Col sm="12" md="6" className="wow fadeInRight">
          <div>
            <img className="project-image" src={Portfolio} alt="Second project" />
          </div>
        </Col>
      </Row>
    </div>
  )
}

export default Project4;
