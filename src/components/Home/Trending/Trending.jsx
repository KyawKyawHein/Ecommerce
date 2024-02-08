import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "./trending.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Trending = ({products,title}) => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 2,
  };
  let slider;
  const goToPrev = () => {
    slider.slickPrev();
  };
  const goToNext = () => {
    slider.slickNext();
  };
  
  return (
    <div className="md:flex md:my-20 overflow-hidden">
      <div className="md:px-20 md:mt-10 w-full bg-white relative">
        <div className="flex gap-3">
          <button
            className="custom-arrow border rounded rounded-full p-3 prev"
            onClick={goToPrev}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5 8.25 12l7.5-7.5"
              />
            </svg>
          </button>
          <button
            className="custom-arrow border rounded rounded-full p-3 next"
            onClick={goToNext}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m8.25 4.5 7.5 7.5-7.5 7.5"
              />
            </svg>
          </button>
        </div>
        <h2 className="font-extrabold my-2 md:my-6 text-2xl uppercase">
          {title}
        </h2>
        <button className="bg-black text-white md:px-5 py-3">SHOP ALL</button>
      </div>
      <div className="w-full">
        <Slider ref={(c) => (slider = c)} {...settings}>
          {products?.map((product) => (
            <div key={product.id} className="p-2 w-full border">
              <img src={product.image} className="w-full h-[250px]" alt="" />
              <h4 className="font-semibold">{product.name.length >30 ? product.name.slice(0,30)+'...': product.name}</h4>
              <p className="mt-3">${product.price}</p>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Trending;
