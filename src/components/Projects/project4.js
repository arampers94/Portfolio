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
              My portfolio is always a work in progress. As I continue to improve my web dev skills,
              I showcase what I've learned by improving my portfolio itself from little things like
              spacing and typography to larger ones like animations and overall design.
            </p>
            <p className="desc-subtext">
              Tools: React, Reactstrap, CSS, Wow.js.
            </p>
            <Button outline color="success" href="https://github.com/arampers94/Portfolio" target="_blank" rel="noopener noreferrer">
              Code
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
