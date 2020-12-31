import React, { useState } from 'react'
import WeatherImages from '../projects/trailr/WeatherImages.js'
import { FaArrowCircleLeft, FaArrowCircleRight } from 'react-icons/fa'

const Weather = () => {
  const [current, setCurrent] = useState(0)

  const nextSlide = () => {
    setCurrent(current === WeatherImages.length - 1 ? 0 : current + 1)
  }

  const prevSlide = () => {
    setCurrent(current === 0 ? WeatherImages.length - 1 : current - 1)
  }

  return (
    <div id='folio'>
      <div className='carousel'>
        <FaArrowCircleLeft className='left-arrow' onClick={prevSlide} />
        <FaArrowCircleRight className='right-arrow' onClick={nextSlide} />
        {WeatherImages.map((image, index) => {
          return (
            <div
              className={index === current ? 'slide active' : 'slide'}>
              {index === current && (
                <img src={image.image} alt='folio images' className='image' />
              )}
            </div>
          );
        })}
      </div>
    </div>
  )
}

export default Weather;