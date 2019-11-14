import React from 'react';
import { Row, Col, Button } from 'reactstrap';
import StarDrugPic from '../../Resources/star-drug.png'

const Project2 = (props) => {
  return (
    <div className="project-block">
      <Row>
        <Col sm="12" md={{ size: 6 }}>
          <div className="project-desc">
            <h1>Star Drug</h1>
            <p className="desc-text">
              This is a website I built for a local small business pharmacy.
              I designed the layout myself with Sketch and implemented
              responsive, mobile-friendly features with React.
              <br /> <br />
              Tools: React, Redux, Material UI, Firestore (NoSQL database), Firebase Auth, Sketch.
              <br /> <br />
              Features: Responsive design, Search, Sort, Inspect item, Checkout, Sign up/Sign in.
            </p>
            <Button outline color="primary" href="https://star-drug.firebaseapp.com/" target="_blank" rel="noopener noreferrer">
              View
            </Button>{' '}
          </div>
        </Col>
        <Col sm="12" md={{ size: 6 }} className="image-wrapper">
          <div>
            <img src={StarDrugPic} className="project-image" alt="Star Drug Pic" />
          </div>
        </Col>
      </Row>
    </div>
  )
}

export default Project2;
