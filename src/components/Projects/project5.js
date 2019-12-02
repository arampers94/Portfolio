import React from 'react';
import { Row, Col, Button } from 'reactstrap';
import Pokedex from '../../Resources/react-pokedex.png'

const Project5 = (props) => {
  return (
    <div className="project-block">
      <Row id="project-5">
        <Col sm="12" md="6" className="wow fadeInLeft">
          <div className="project-desc">
            <h2 className="desc-title">
              React Pokédex
            </h2>
            <p className="desc-text">
              This is a Pokédex web app powered by PokeAPI. My app consumes endpoints provided
              by this REST API and renders the data with React to bring users a simple and
              intuitive way to view data about various pokémon across every region!
            </p>
            <p className="desc-subtext">
              Tools: React, Redux, PokeAPI, Axios, React Router, React Bootstrap, Sass
            </p>
            <Button outline color="primary" href="https://react-pokedex-60263.web.app/" target="_blank" rel="noopener noreferrer">
              Demo
            </Button>{' '}
            <Button outline color="success" href="https://github.com/arampers94/react-pokedex" target="_blank" rel="noopener noreferrer">
              Code
            </Button>{' '}
            <Button outline color="warning" href="https://www.lucidchart.com/documents/view/55b894cb-83b7-4210-9e6b-8c353b092d89" target="_blank" rel="noopener noreferrer">
              Architecture
            </Button>
          </div>
        </Col>
        <Col sm="12" md="6" className="wow fadeInRight">
          <div>
            <img src={Pokedex} className="project-image" alt="Travel Blog" />
          </div>
        </Col>
      </Row>
    </div>
  )
}

export default Project5;