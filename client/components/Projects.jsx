import React from 'react';
import { Link } from 'react-router-dom';

import folioImage from '../../client/projects/folio/image6.png';
import trailrImage from '../../client/projects/trailr/image1.png';

const Projects = () => {

  return (
    <div id='container-projects'>
      <div id='container-projects'>
        <h1>projects.</h1>
      </div>
      <div className='container-project'>
        <Link to='/folio'><img src={folioImage} alt='Folio'></img></Link>
        <div className='container-project-about'>
          <h1>folio stocks</h1>
          <p>fantasy based stock trading app to help you learn the stock market.</p>
          <ul>
            <li>2020</li>
            <li>react/redux</li>
            <li>nodejs</li>
            <li>postgresql</li>
            <li>aws</li>
          </ul>
        </div>
      </div>
      <div className='container-project'>
        <div className='container-project-about trailr'>
          <h1>trailr weather</h1>
          <p>7hr/5day weather forecast for your specific location</p>
          <ul>
            <li>2020</li>
            <li>react</li>
            <li>bootsrap</li>
          </ul>
        </div>
        <Link to='/weather'><img src={trailrImage} alt='Weather'></img></Link>
      </div>
    </div>
  )
}

export default Projects;