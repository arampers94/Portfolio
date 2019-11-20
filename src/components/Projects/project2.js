import React from 'react';
import { Row, Col, Button } from 'reactstrap';
import TravelBlog from '../../Resources/travel_blog.jpg'

const anastasia = (
  <a href="https://dribbble.com/anastasia-tino" target="_blank" rel="noopener noreferrer">
    Anastasia
  </a>
)

const dribbble = (
  <a href="https://dribbble.com/" target="_blank" rel="noopener noreferrer">
    dribbble.com
  </a>
)

const Project2 = (props) => {
  return (
    <div className="project-block">
      <Row id="project-2">
        <Col sm="12" md="6" className="wow fadeInLeft">
          <div className="project-desc">
            <h2 className="desc-title">
              Travel Blog
            </h2>
            <p className="desc-text">
              Originally designed by {anastasia} on {dribbble}, I translated this concept from design
              to code.
            </p>
            <p className="desc-subtext">
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
        <Col sm="12" md="6" className="wow fadeInRight">
          <div>
            <img src={TravelBlog} className="project-image" alt="Travel Blog" />
          </div>
        </Col>
      </Row>
    </div>
  )
}

export default Project2;