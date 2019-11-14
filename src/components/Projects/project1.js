import React from 'react';
import { Row, Col, Button } from 'reactstrap';
import TravelBlog from '../../Resources/travel_blog.png'

const Project1 = (props) => {
  return (
    <div className="project-block">
      <Row>
        <Col sm="12" md="6" className="image-wrapper">
          <div>
            <img src={TravelBlog} className="project-image" alt="Star Drug Pic" />
          </div>
        </Col>
        <Col sm="12" md={{ size: 6 }}>
          <div className="project-desc">
            <h1>Travel Blog</h1>
            <p className="desc-text">
              Originally designed by Anastasia on dribbble.com, I translated this concept from design
              to code.
              <br /> <br />
              Tools: React, Material UI
            </p>
            <Button outline color="primary" href="https://travel-blog-a435f.firebaseapp.com/" target="_blank" rel="noopener noreferrer">
              View
            </Button>{' '}
            <Button outline color="danger" href="https://dribbble.com/shots/8131732-Travel-Blog-Web-Design" target="_blank" rel="noopener noreferrer">
              Original Design
            </Button>{' '}
          </div>
        </Col>
      </Row>
    </div>
  )
}

export default Project1;
