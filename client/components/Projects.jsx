import React from 'react';
import { Link } from 'react-router-dom';

import folioImage from '../../client/projects/folio/image6.png';
import trailrImage from '../../client/projects/trailr/image1.png';

import { FiGithub } from 'react-icons/fi'

const Projects = () => {

  return (
    <div id='container-projects'>
      <h1>projects.</h1>
      <div className='container-project'>
        <Link to='/folio'><img src={folioImage} alt='Folio App'></img></Link>
        <div className='container-project-about'>
          <h2>folio stocks</h2>
          <p>Fantasy based stock trading app to help you learn the stock market.</p>
          <ul>
            <li>react/redux</li>
            <li>nodejs</li>
            <li>postgresql</li>
            <li>aws</li>
          </ul>
          <FiGithub className='icon' />
        </div>
      </div>
      <div className='container-project'>
        <div className='container-project-about trailr'>
          <h2>weather</h2>
          <p>7hr/5day weather forecast for your specific location.</p>
          <ul>
            <li>react</li>
            <li>bootstrap</li>
            <li>nodejs</li>
          </ul>
          <FiGithub className='icon' />
        </div>
        <Link to='/weather'><img src={trailrImage} alt='Weather Component'></img></Link>
      </div>
    </div>
  )
}

export default Projects;