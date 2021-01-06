import React, { useState, useEffect } from 'react'
import WeatherImages from '../projects/trailr/WeatherImages.js'
import { FiArrowLeftCircle, FiArrowRightCircle } from 'react-icons/fi'

const Weather = () => {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  const nextSlide = () => {
    setCurrent(current === WeatherImages.length - 1 ? 0 : current + 1)
  }

  const prevSlide = () => {
    setCurrent(current === 0 ? WeatherImages.length - 1 : current - 1)
  }

  return (
    <div id='weather'>
      <div>
        <h1>weather</h1>
      </div>
      <div className='carousel'>
        {WeatherImages.map((image, index) => {
          return (
            <div
              className={index === current ? 'slide active' : 'slide'} key={index}>
              {index === current && (
                <img src={image.image} alt='weather images' className='image' />
              )}
            </div>
          );
        })}
        <FiArrowLeftCircle className='left-arrow' onClick={prevSlide} />
        <FiArrowRightCircle className='right-arrow' onClick={nextSlide} />
      </div>
      <div className='folio-description'>
        <p>7hr/5day weather forecast for your specific location.</p>
      </div>
      <div className='folio-notes'>
        <h2>notes.</h2>
        <ul>
          <li>Open source project adding a Weather Component to a Hiking App.</li>
          <li>Use of Material UI and dynamic update based on location.</li>
          <li>Added a toggle switch to dynamically update between 5 day and 7 hr forecast.</li>
        </ul>
      </div>
      <div className='folio-tech'>
        <h2>tech stack.</h2>
        <ul>
          <li>React</li>
          <li>Material UI</li>
          <li>Nodej</li>
        </ul>
      </div>
    </div>
  )
}

export default Weather;