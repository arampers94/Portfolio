import React, { Component } from 'react'
import * as Scroll from 'react-scroll';
import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import Intro from './components/Intro'
import About from './components/About'
import Project1 from './components/Projects/project1'
import Project2 from './components/Projects/project2'
import Project3 from './components/Projects/project3'
import Project4 from './components/Projects/project4'
import Project5 from './components/Projects/project5'
import Skills from './components/Skills'
import Footer from './components/Footer'
import { Row, Col } from 'reactstrap'
import './App.scss'

class App extends Component {

  componentDidMount() {
    Events.scrollEvent.register('begin', function (to, element) {
      console.log("begin", arguments);
    });

    Events.scrollEvent.register('end', function (to, element) {
      console.log("end", arguments);
    });

    scrollSpy.update();
  }

  componentWillUnmount() {
    Events.scrollEvent.remove('begin');
    Events.scrollEvent.remove('end');
  }

  render() {

    return (
      <div id="content">
        <div id="landing-page" className="info">
          <Intro />
        </div>
        <div className="content-body">
          <div>
            <Element name="about" className="element">
              <About />
            </Element>
            <Element name="projects" className="element">
              <div className="projects-wrapper">
                <Row id="project-section-title">
                  <Col xs="12" className="wow fadeInDown" data-wow-delay=".25s">
                    <h1 className="section-title">
                      Latest Projects
                    </h1>
                  </Col>
                  <Col xs="12" className="project-section-title-underline wow zoomIn">
                    <hr />
                  </Col>
                </Row>
                <Project5 />
                <Project1 />
                <Project2 />
                <Project3 />
                <Project4 />
                <Element name="skills" className="element">
                  <Skills />
                </Element>
              </div>
            </Element>
            <Element name="contact" className="element">
              <Footer />
            </Element>
          </div>
        </div>
      </div>
    )
  }
}

export default App;
