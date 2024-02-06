import React from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css/sea-green';
import "./carousel.css"

const ThumbnailCarousel = ({images,onClickThumbnail}) => {
  return (
    <Splide
    options={{
      fixedWidth: 100,
      fixedHeight: 64,
      isNavigation: true,
      gap: 10,
      arrows: false,
      focus: 'center',
      pagination: false,
      breakpoints: {
        600: {
          fixedWidth: 66,
          fixedHeight: 40,
        },
      },
    }}
    className='thumbnail-carousel'
  >
    {images.map((image, index) => (
      <SplideSlide key={index}>
        <img
          src={image}
          alt={`Thumbnail ${index}`}
          onClick={() => onClickThumbnail(index)}
        />
      </SplideSlide>
    ))}
  </Splide>

  )
}

export default ThumbnailCarousel
