import React, { useState, useEffect } from 'react'
import FolioImages from '../projects/folio/FolioImages.js'
import { FiArrowLeftCircle, FiArrowRightCircle } from 'react-icons/fi'

const Folio = () => {
  const [current, setCurrent] = useState(0)

  const nextSlide = () => {
    setCurrent(current === FolioImages.length - 1 ? 0 : current + 1)
  }

  const prevSlide = () => {
    setCurrent(current === 0 ? FolioImages.length - 1 : current - 1)
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  return (
    <div id='folio'>
      <div>
        <h1>folio stocks.</h1>
      </div>
      <div className='carousel'>
        {FolioImages.map((image, index) => {
          return (
            <div
              className={index === current ? 'slide active' : 'slide'} key={index}>
              {index === current && (
                <img src={image.image} alt='folio images' className='image' />
              )}
            </div>
          );
        })}
        <FiArrowLeftCircle className='left-arrow' onClick={prevSlide} />
        <FiArrowRightCircle className='right-arrow' onClick={nextSlide} />
      </div>
      <div className='folio-description'>
        <p>Fantasy based stock trading app to help you learn the stock market.</p>
      </div>
      <div className='folio-notes'>
        <h2>notes.</h2>
        <ul>
          <li>Focus here was on the creation of a Fantasy Sport type application.</li>
          <li>Learning Redux was a challenge, but I think with this type of application, it was necessary. </li>
          <li>Some of the issues that I ran into was the challenge of timing between the database and front-end. Calling the IEX API to get the updated stock price, updating the current user information based on the stock price as well as the league information, and finally re-populating the data based on calculations of bought/sold stocks. This helped to cement my understanding of Async/Await.</li>
          <li>Material UI was heavily used to save on time as this was build in 5 weeks.</li>
        </ul>
      </div>
      <div className='folio-tech'>
        <h2>tech stack.</h2>
        <ul>
          <li>React</li>
          <li>Redux</li>
          <li>Material UI</li>
          <li>React Router</li>
          <li>Nodejs</li>
          <li>Google Passport</li>
          <li>PostgreSQL</li>
          <li>AWS</li>
        </ul>
      </div>
    </div>
  )
}

export default Folio;