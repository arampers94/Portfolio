import React from 'react';
import { Row, Col, Button } from 'reactstrap';
import StarDrugPic from '../../Resources/star-drug.png'

const Project3 = (props) => {
  return (
    <div className="project-block">
      <Row>
        <Col sm="12" md="6" className="wow fadeInLeft">
          <div>
            <img src={StarDrugPic} className="project-image" alt="Star Drug" />
          </div>
        </Col>
        <Col sm="12" md="6" className="wow fadeInRight">
          <div className="project-desc">
            <h1>Star Drug</h1>
            <p className="desc-text">
              This is a website I built for a local small business pharmacy.
              I designed the layout myself with Sketch and implemented
              responsive, mobile-friendly features with React.
            </p>
            <p className="desc-subtext">
              Tools: React, Redux, React Router, Material UI, Firestore (NoSQL database), Firebase Auth, Sketch.
            </p>
            <Button outline color="primary" href="https://star-drug.firebaseapp.com/" target="_blank" rel="noopener noreferrer">
              View
            </Button>{' '}
          </div>
        </Col>
      </Row>
    </div>
  )
}

export default Project3;