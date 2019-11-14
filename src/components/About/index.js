import React from 'react';
import { Row, Col } from 'reactstrap';

const About = (props) => {
  return (
    <div id="about-container">
      <Row style={{ paddingBottom: "50px" }}>
        <Col>
          <div className="about-title">
            <h1>An Exceptional Team Begins With its Teammates.</h1>
          </div>
          <hr />
        </Col>
      </Row>
      <Row>
        <Col className="about-col">
          <div className="about-subtitle">
            <h1>Who am I?</h1>
          </div>
          <div className="about-text">
            <p>
              A web developer, passionate about code and always
              looking to improve my craft however I can. I enjoy learning
              new technologies on my own as well as from others. I am also
              confident in my ability to quickly translate new skills to
              production.
            </p>
          </div>
        </Col>
        <Col className="about-col">
          <div className="about-subtitle">
            <h1>Why me?</h1>
          </div>
          <div className="about-text">
            <p>
              I'm a great team player. In addition to being a motivated self-starter,
              adaptable, and a fast-learner, I am also friendly, have excellent
              communication skills, am open to new ideas, and work well independently
              as well as collaboratively.
          </p>
          </div>
        </Col>
        <Col className="about-col">
          <div className="about-subtitle">
            <h1>My Goals</h1>
          </div>
          <div className="about-text">
            <p>
              I'm looking for the opportunity to apply my problem-solving and web dev skills
              to produce and contribute to excellent web content and to work alongside
              creative, talented, and motivated individuals of all backgrounds,
              all while continuing to improving my skills.
            </p>
          </div>
        </Col>
      </Row>
    </div>
  )
}

export default About;
