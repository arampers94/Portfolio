import React from 'react';
import { Row, Col, Button } from 'reactstrap';
import CaptureGif from '../../Resources/capture.gif';

const Project3 = (props) => {
  return (
    <div id="project-2" className="project-block">
      <Row>
        <Col sm="12" md={{ size: 6 }}>
          <div className="media-block" id="capture-gif">
            <img style={{ width: "65%" }} src={CaptureGif} alt="Second project" />
          </div>
        </Col>
        <Col sm="12" md={{ size: 6 }}>
          <div className="project-desc">
            <h1>Capture</h1>
            <p>
              This is one of the more fun projects I've had the opportunity to work on. Built
              with React Native, this simple cross-platform smartphone app allows users to create,
              update, delete notes, and set reminders. It also features an experience bar
              and a level up system as an incentive for the user to keep using the app.
                    </p>
            <Button outline color="success" href="https://github.com/mouthwash/Capture" target="_blank" rel="noopener noreferrer">
              Source
            </Button>{' '}
          </div>
        </Col>
      </Row>
    </div>
  )
}

export default Project3;
