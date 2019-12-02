import React from 'react'
import { Row, Col, Container } from 'reactstrap'
import icons from './icons'

const Skills = () => {
  return (
    <div className="project-block">
      <Row>
        <Col xs="12" className="wow fadeInDown" data-wow-delay=".25s">
          <h1 className="section-title">
            Tech Skills
          </h1>
        </Col>
        <Col xs="12">
          <hr className="wow zoomIn" />
        </Col>
        <Col xs="12" className="icon-container">
          <Row style={{ width: '100%' }} className="wow fadeInLeft">
            <h4 style={{ marginBottom: '15px' }}>
              Front End
            </h4>
          </Row>
          {icons.frontEnd.map((icon, index) => {
            return (
              <div className="icon wow fadeInDown" data-wow-delay={icon.delayAnimation} key={index}>
                <img
                  src={icon.icon}
                  alt={index}
                  className="icon-img"
                />
                <p style={{ fontSize: '13px' }}>{icon.name}</p>
              </div>
            )
          })}
        </Col>
        <Col xs="12" className="icon-container">
          <Row style={{ width: '100%' }} className="wow fadeInLeft">
            <h4 style={{ marginBottom: '15px' }}>
              Back End
            </h4>
          </Row>
          {icons.backEnd.map((icon, index) => {
            return (
              <div className="icon wow fadeInDown" data-wow-delay={icon.delayAnimation} key={index}>
                <div className={icon.applyClass === true ? "icon-background" : null}></div>
                <img
                  id={icon.id}
                  src={icon.icon}
                  alt={index}
                  className="icon-img"
                />
                <p style={{ fontSize: '13px' }}>{icon.name}</p>
              </div>
            )
          })}
        </Col>
        <Col xs="12" className="icon-container">
          <Row style={{ width: '100%' }} className="wow fadeInLeft">
            <h4 style={{ marginBottom: '15px' }}>
              Misc.
            </h4>
          </Row>
          {icons.misc.map((icon, index) => {
            return (
              <div className="icon wow fadeInDown" data-wow-delay={icon.delayAnimation} key={index}>
                <div className={icon.applyClass === true ? "icon-background" : null}></div>
                <img
                  id={icon.id}
                  src={icon.icon}
                  alt={index}
                  className="icon-img"
                />
                <p style={{ fontSize: '13px' }}>{icon.name}</p>
              </div>
            )
          })}
        </Col>
      </Row>
    </div>
  )
}

export default Skills
