import React from 'react';
import { Row, Col, Button } from 'reactstrap';
import Portfolio from '../../Resources/portfolio-landing-page.png';

const Project4 = (props) => {
  return (
    <div id="project-4" className="project-block">
      <Row>
        <Col sm="12" md={{ size: 6 }}>
          <div className="project-desc">
            <h1>This Portfolio</h1>
            <p>
              This site is also one of my projects! I built it myself with HTML, CSS,
              JS, and React. The design is simple and intuitive, making it easy to
              find the important stuff and a pleasure to read. The source code is available
              on my Github page.
            </p>
            <Button outline color="success" href="https://github.com/arampers94/Portfolio" target="_blank" rel="noopener noreferrer">
              Source
            </Button>{' '}
          </div>
        </Col>
        <Col sm="12" md={{ size: 6 }}>
          <div className="media-block">
            <img style={{ width: "100%" }} src={Portfolio} alt="Second project" />
          </div>
        </Col>
      </Row>
    </div>
  )
}

export default Project4;
