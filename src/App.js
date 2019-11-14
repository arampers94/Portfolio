import React, { Component } from 'react';
import './App.css';
import * as Scroll from 'react-scroll';
import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';
import Intro from './components/Intro';
import About from './components/About'
import Project1 from './components/Projects/project1';
import Project2 from './components/Projects/project2';
import Project3 from './components/Projects/project3';
import Project4 from './components/Projects/project4';
import Footer from './components/Footer';

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
                <div id="project-section-title">
                  <h1>Some of my recent work</h1>
                  <hr />
                </div>
                <Project1 />
                <Project2 />
                <Project3 />
                <Project4 />
              </div>
            </Element>
            <Element name="contact" className="element">
              <Footer />
            </Element>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
