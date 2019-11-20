import React from 'react';
import { Row, Col } from 'reactstrap';

const About = (props) => {
  return (
    <div id="about-container">
      <Row style={{ paddingBottom: "50px" }}>
        <Col xs="12" className="wow fadeInDown" data-wow-delay=".25s">
          <h1 className="section-title">
            An Exceptional Team Begins With its Teammates.
          </h1>
        </Col>
        <Col xs="12">
          <hr className="wow zoomIn" />
        </Col>
      </Row>
      <Row>
        <Col xs="12" md="4" className="about-col wow zoomIn" data-wow-delay=".25s">
          <h2 className="desc-title">
            Who am I?
          </h2>
          <p className="desc-text">
            A web developer, passionate about code and always
            looking to improve my craft however I can. I enjoy learning
            new technologies on my own as well as from others. I am also
            confident in my ability to quickly translate new skills to
            production.
          </p>
        </Col>
        <Col xs="12" md="4" className="about-col wow zoomIn" data-wow-delay=".5s">
          <h2 className="desc-title">
            Why me?
          </h2>
          <div className="about-text">
            <p className="desc-text">
              I'm a great team player. In addition to being a motivated self-starter,
              adaptable, and a fast-learner, I am also friendly, have excellent
              communication skills, am open to new ideas, and work well independently
              as well as collaboratively.
          </p>
          </div>
        </Col>
        <Col xs="12" md="4" className="about-col wow zoomIn" data-wow-delay=".75s">
          <h2 className="desc-title">
            My Goals
          </h2>
          <p className="desc-text">
            I'm looking for the opportunity to apply my problem-solving and web dev skills
            to produce and contribute to excellent web content and to work alongside
            creative, talented, and motivated individuals of all backgrounds,
            all while continuing to improving my skills.
          </p>
        </Col>
      </Row>
    </div>
  )
}

export default About;
