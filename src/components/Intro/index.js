import React from 'react';
import { Row, Col, Button } from 'reactstrap';
import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';
import MyNavbar from '../Navbar';

const Intro = (props) => {
  return (
    <div id="intro">
      <Row style={{ width: "100%" }}>
        <MyNavbar />
      </Row>
      <Row>
        <div style={{ margin: "auto", color: "white" }}>
          <h1 style={{ fontSize: "4em" }}>
            Hi, my name's Amar.
          </h1>
          <p style={{ fontSize: "20px", fontStyle: "italic" }}>
            Full Stack Developer. Problem Solver. Tech Enthusiast.
          </p>
          <div id="icons">
            <a className="social-links" href="https://github.com/arampers94" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github fa-2x" ></i>
            </a>{' '}
            <a className="social-links" href="https://www.linkedin.com/in/amar-rampersaud/" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin fa-2x"></i>
            </a>{' '}
            <a className="social-links" href="mailto:arampers94@gmail.com">
              <i className="far fa-envelope fa-2x"></i>
            </a>
          </div>
        </div>
      </Row>
      <Row>
        <div id="scroll-prompt-wrapper">
          <Link activeClass="active" to="about" spy={true} smooth={true} duration={500}>
            <i id="scroll-prompt" className="fas fa-chevron-down fa-4x"></i>
          </Link>
        </div>
      </Row>
    </div>
  )
}

export default Intro;
