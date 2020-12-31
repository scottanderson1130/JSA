import React, { useState } from 'react'
import FolioImages from '../projects/folio/FolioImages.js'
import { FaArrowCircleLeft, FaArrowCircleRight } from 'react-icons/fa'

const Folio = () => {
  const [current, setCurrent] = useState(0)

  const nextSlide = () => {
    setCurrent(current === FolioImages.length - 1 ? 0 : current + 1)
  }

  const prevSlide = () => {
    setCurrent(current === 0 ? FolioImages.length - 1 : current - 1)
  }

  return (
    <div id='folio'>
      <div className='carousel'>
        <FaArrowCircleLeft className='left-arrow' onClick={prevSlide} />
        <FaArrowCircleRight className='right-arrow' onClick={nextSlide} />
        {FolioImages.map((image, index) => {
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

export default Folio;