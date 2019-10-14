import React from 'react';
import { Row, Col } from 'reactstrap';

const About = (props) => {
  return (
    <div id="about-container" className="project-block">
      <Row style={{ paddingBottom: "50px" }}>
        <Col>
          <h1>An Exceptional Team Begins With its Teammates.</h1>
          <hr />
        </Col>
      </Row>
      <Row>
        <Col className="about-col">
          <h5>Who am I?</h5>
          <p>
            A full stack developer, passionate about code and always
            looking to improve my craft however I can. I enjoy learning
            new technologies on my own as well as from others. I am also
            confident in my ability to quickly translate new skills to
            production.
                </p>
        </Col>
        <Col className="about-col">
          <h5>Why me?</h5>
          <p>
            I'm a great team player. In addition to being a motivated self-starter,
            adaptable, and a fast-learner, I am also friendly, have excellent
            communication skills, am open to new ideas, and work well independently
            as well as collaboratively.
                 </p>
        </Col>
        <Col className="about-col">
          <h5>What am I looking for?</h5>
          <p>
            The opportunity to apply my problem-solving and web dev skills
            to solve some of the industry's toughest challenges in order to
            increase efficiency and reduce costs, work alongside
            creative, talented, and motivated individuals of all backgrounds,
            and continue improving my skills.
                </p>
        </Col>
      </Row>
    </div>
  )
}

export default About;
