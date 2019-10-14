import React from 'react';
import { Row, Col, Button } from 'reactstrap';
import StarDrugPic from '../../Resources/star-drug.png'

const Project1 = (props) => {
  return (
    <div id="project-3" className="project-block">
      <Row>
        <Col sm="12" md={{ size: 6 }}>
          <div className="media-block">
            <img src={StarDrugPic} width="100%" alt="Star Drug Pic" />
          </div>
        </Col>
        <Col sm="12" md={{ size: 6 }}>
          <div className="project-desc">
            <h1>Star Drug</h1>
            <p>
              This is a website I built for a local small business pharmacy using React, Redux, and Firebase.
              Styled with Material UI for React, I designed the layout myself with Sketch and implemented
              responsive, mobile-friendly features with React. Features include product search, sort,
              inspection, and checkout. Users can also create accounts to leave reviews on products and save
              their checkout details for future purchases.
            </p>
            <Button outline color="primary" href="https://star-drug.firebaseapp.com/" target="_blank" rel="noopener noreferrer">
              View
            </Button>{' '}
            {/* <Button outline color="success" href="" target="_blank" rel="noopener noreferrer">
              Source
            </Button>{' '} */}
          </div>
        </Col>
      </Row>
    </div>
  )
}

export default Project1;
