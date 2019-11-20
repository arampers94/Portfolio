// Front end icons
import react from '../../Resources/react.svg'
import redux from '../../Resources/redux.svg'
import materialui from '../../Resources/material-ui.svg'
import html5 from '../../Resources/html-5.svg'
import css3 from '../../Resources/css-3.svg'
import bootstrap from '../../Resources/bootstrap.svg'
import javascript from '../../Resources/javascript.svg'
import sass from '../../Resources/sass.svg'

// Back end icons
import python from '../../Resources/python.svg'
import postgresql from '../../Resources/postgresql.svg'
import mysql from '../../Resources/mysql.svg'
import nodejs from '../../Resources/nodejs.svg'

// Misc icons
import firebase from '../../Resources/firebase.svg'
import aws from '../../Resources/aws.svg'
import git from '../../Resources/git.svg'
import github from '../../Resources/github-icon.svg'

const frontEnd = [
  {
    icon: javascript,
    name: 'Javascript',
    id: 'javascript',
    delayAnimation: '.1s'
  },
  {
    icon: react,
    name: 'React',
    id: 'react',
    delayAnimation: '.2s'
  },
  {
    icon: redux,
    name: 'Redux',
    id: 'redux',
    delayAnimation: '.3s'
  },
  {
    icon: materialui,
    name: 'Material UI',
    id: 'material-ui',
    delayAnimation: '.4s'
  },
  {
    icon: html5,
    name: ' HTML5',
    id: 'html5',
    delayAnimation: '.5s'
  },
  {
    icon: css3,
    name: 'CSS3',
    id: 'css3',
    delayAnimation: '.6s'
  },
  {
    icon: sass,
    name: 'Sass',
    id: 'sass',
    delayAnimation: '.7s'
  },
  {
    icon: bootstrap,
    name: 'Bootstrap',
    id: 'bootstrap',
    delayAnimation: '.8s'
  },
]

const backEnd = [
  {
    icon: nodejs,
    name: 'Node.js',
    id: 'nodejs',
    delayAnimation: '.1s'
  },
  {
    icon: python,
    name: 'Python',
    id: 'python',
    delayAnimation: '.2s'
  },
  {
    icon: postgresql,
    name: 'PostgreSQL',
    id: 'postgres',
    delayAnimation: '.3s'
  },
  {
    icon: mysql,
    name: 'MySQL',
    id: 'mysql',
    delayAnimation: '.4s'
  },
]

const misc = [
  {
    icon: firebase,
    name: 'Firebase',
    id: 'firebase',
    delayAnimation: '.1s'
  },
  {
    icon: aws,
    name: 'AWS',
    id: 'aws',
    delayAnimation: '.2s'
  },
  {
    icon: git,
    name: 'Git',
    id: 'git',
    delayAnimation: '.3s'
  },
  {
    icon: github,
    name: 'Github',
    applyClass: true,
    id: 'github',
    delayAnimation: '.4s'
  },
]

const icons = {
  frontEnd,
  backEnd,
  misc
}

export default icons