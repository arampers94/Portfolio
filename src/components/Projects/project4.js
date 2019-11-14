import React from 'react';
import { Row, Col, Button } from 'reactstrap';
import Portfolio from '../../Resources/portfolio-landing-page.png';

const Project4 = (props) => {
  return (
    <div id="project-4" className="project-block">
      <Row>
        <Col sm="12" md="6">
          <div className="project-desc">
            <h1>This Portfolio</h1>
            <p className="desc-text">
              This site is also one of my projects! The design is simple and intuitive, making it easy to
              find the important stuff and a pleasure to read. Source code available
              on my Github page.
              <br /> <br />
              Tools: React, Reactstrap, CSS.
            </p>
            <Button outline color="success" href="https://github.com/arampers94/Portfolio" target="_blank" rel="noopener noreferrer">
              Source
            </Button>{' '}
          </div>
        </Col>
        <Col sm="12" md="6" className="image-wrapper">
          <div>
            <img className="project-image" src={Portfolio} alt="Second project" />
          </div>
        </Col>
      </Row>
    </div>
  )
}

export default Project4;
