import React from 'react';
import { Row } from 'reactstrap';
import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';
import MyNavbar from '../Navbar';

const Intro = (props) => {

  var background = (
    <div class="background">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
  )
  return (
    <div id="intro">
      {/* <Row style={{ width: "100%" }}> */}
      <MyNavbar />
      {/* </Row> */}
      <Row className="intro-container" style={{ position: 'relative' }}>
        <div className="intro-title">
          <h1 style={{ fontSize: "3.75em", fontWeight: 600 }} className="wow flipInX" data-wow-delay="1.5s">
            Hi, my name's Amar.
          </h1>
          <div className="landing-page-subtext-container">
            <p className="landing-page-subtext wow fadeInRight" data-wow-delay="2.5s">
              Web Developer.
            </p>
            <p className="landing-page-subtext wow fadeInRight" data-wow-delay="3.5s">
              Problem Solver.
            </p>
            <p className="landing-page-subtext wow fadeInRight" data-wow-delay="4.5s">
              React Ninja.
            </p>
          </div>
          <div id="icons" className="wow fadeIn" data-wow-delay="5.5s">
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
        {background}
      </Row>
      <Row>
        <div id="scroll-prompt-wrapper" className="wow fadeIn" data-wow-delay="7s">
          <Link activeClass="active" to="about" spy={true} smooth={true} duration={500}>
            <i id="scroll-prompt" className="fas fa-chevron-down fa-4x"></i>
          </Link>
        </div>
      </Row>
    </div>
  )
}

export default Intro;
