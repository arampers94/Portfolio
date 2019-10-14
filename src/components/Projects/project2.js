import React from 'react';
import { Row, Col, Button } from 'reactstrap';
import Context from '../../Resources/context.png';

const Project2 = (props) => {
  return (
    <div id="project-1" className="project-block">
      <Row>
        <Col sm="12" md={{ size: 6 }}>
          <div className="project-desc">
            <h1>Context</h1>
            <p>
              A personal project I built to demonstrate my skill and ability to work
              across the full stack from front-end design to back-end data management.
              It works the same way you would expect a typical blog site to - users have
              the ability to sign up, create, rate, and comment on posts.
            </p>
            <Button outline color="primary" href="https://context-fceab.firebaseapp.com/" target="_blank" rel="noopener noreferrer">
              View
            </Button>{' '}
            <Button outline color="success" href="https://github.com/arampers94/Context" target="_blank" rel="noopener noreferrer">
              Source
            </Button>{' '}
          </div>
        </Col>
        <Col sm="12" md={{ size: 6 }}>
          <div className="media-block">
            <img style={{ width: "100%" }} src={Context} alt="First project" />
          </div>
        </Col>
      </Row>
    </div>
  )
}

export default Project2;
