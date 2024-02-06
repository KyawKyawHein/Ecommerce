import React from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css/sea-green';
import "./carousel.css"

const MainCarousel = ({images,currentSlide}) => {
  return (
    <Splide
    options={{
      type: 'fade',
      rewind: true,
      pagination: false,
      arrows: false,
      autoHeight: true,
    }}
    className='main-carousel'
  >
    {images.map((image, index) => (
        index == currentSlide &&
      <SplideSlide key={index}>
        <img src={image} className='main-carousel-img' alt={`Slide ${index}`} />
      </SplideSlide>
    ))}
  </Splide>

  )
}

export default MainCarousel
