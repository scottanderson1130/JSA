import React from 'react';
import { Link } from 'react-router-dom';

import folioImage from '../../client/projects/folio/image6.png';

const Projects = () => {

  return (
    <div id='container-projects'>
      <div id='container-projects'>
        <h1>projects.</h1>
      </div>
      <div className='container-project'>
        <img src={folioImage} alt='Folio'></img>
        <div className='container-project-about'>
          <Link to='/folio'>folio stocks</Link>
          <p>fantasy based stock trading app to help you learn about the stock market.</p>
          <ul>
            <li>react/redux</li>
            <li>nodejs</li>
            <li>postgresql</li>
            <li>2020</li>
          </ul>
        </div>
      </div>
      <Link to='/weather'>weather</Link>
    </div>
  )
}

export default Projects;