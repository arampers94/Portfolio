import React from 'react';
import { Row, Col, Button } from 'reactstrap';
import Context from '../../Resources/context.png';

const Project3 = (props) => {
  return (
    <div className="project-block">
      <Row>
        <Col sm="12" md={{ size: 6 }} className="image-wrapper">
          <div>
            <img className="project-image" src={Context} alt="First project" />
          </div>
        </Col>
        <Col sm="12" md={{ size: 6 }}>
          <div className="project-desc">
            <h1>Context</h1>
            <p className="desc-text">
              A personal project I built to demonstrate my ability to work
              across the full stack and learn new technologies.
              <br /> <br />
              Tools: React, Redux, Firebase
            </p>
            <Button outline color="primary" href="https://context-fceab.firebaseapp.com/" target="_blank" rel="noopener noreferrer">
              View
            </Button>{' '}
            <Button outline color="success" href="https://github.com/arampers94/Context" target="_blank" rel="noopener noreferrer">
              Source
            </Button>{' '}
          </div>
        </Col>
      </Row>
    </div>
  )
}

export default Project3;
