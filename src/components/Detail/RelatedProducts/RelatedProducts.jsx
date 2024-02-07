import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./relatedProducts.css"

const RelatedProducts = ({products}) => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 3,
    };
    let slider;
  const goToPrev = () => {
    slider.slickPrev();
  };
  const goToNext = () => {
    slider.slickNext();
  };

  return (
    <div className='my-3 lg:my-10'>
      <h1 className="text-3xl font-bold text-center my-4">Related Products</h1>
      <div className="w-[1000px]">
        <Slider {...settings}>
            {products?.map((product) => (
                <div key={product.id} className="p-2 w-full border">
                    <img src={product.image} className="w-full h-[250px]" alt="" />
                    <h4 className="font-semibold">{product.title.length >30 ? product.title.slice(0,30)+'...': product.title}</h4>
                    <p className="mt-3">${product.price}</p>
                </div>
            ))}
        </Slider>
      </div>
    </div>
  )
}

export default RelatedProducts
