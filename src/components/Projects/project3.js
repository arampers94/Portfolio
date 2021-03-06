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
            <h2 className="desc-title">
              Star Drug
            </h2>
            <p className="desc-text">
              This is a website I built for a local small business pharmacy.
              I designed the layout myself with Sketch and implemented
              responsive, mobile-friendly features with React.
            </p>
            <p className="desc-subtext">
              Tools: React, Redux, React Router, Material UI, Firestore (NoSQL database), Firebase Auth, Sketch.
            </p>
            <Button outline color="primary" href="https://star-drug.firebaseapp.com/" target="_blank" rel="noopener noreferrer">
              Demo
            </Button>{' '}
            <Button outline color="success" href="https://github.com/arampers94/star-drug" target="_blank" rel="noopener noreferrer">
              Code
            </Button>{' '}
            <Button outline color="warning" href="https://www.lucidchart.com/documents/view/591a3f47-7437-403f-ae32-443bdaa0582d/0_0" target="_blank" rel="noopener noreferrer">
              Architecture
            </Button>
          </div>
        </Col>
      </Row>
    </div>
  )
}

export default Project3;