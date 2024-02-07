import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion } from "framer-motion"
import "./relatedProducts.css";

const RelatedProducts = ({ products }) => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
  };
  let slider;
  const goToPrev = () => {
    slider.slickPrev();
  };
  const goToNext = () => {
    slider.slickNext();
  };

  return (
    <>
      {products.length >= 1 && (
        <motion.div layout
        initial={{ scale: 0.6 }}
        animate={{  scale: 1 }}
        transition={{
          type: "spring",
        }}      
         className="my-3 lg:my-10">
          <h1 className="text-3xl font-bold text-center my-4">
            Related Products
          </h1>
          <div className="md:flex">
            <div className="w-full relative">
              <div className="absolute top-[120px] z-20 left-[-20px]">
                <button
                  className="custom-arrow border bg-black text-white rounded rounded-full p-3 prev"
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
              </div>
              <div className="absolute top-[120px] z-20 right-[-20px]">
                <button
                  className="custom-arrow bg-black text-white border rounded rounded-full p-3 next"
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

              <Slider ref={(c) => (slider = c)} {...settings}>
                {products?.map((product) => (
                  <div key={product.id} className="p-2 w-full border">
                    <img
                      src={product.image}
                      className="w-full h-[250px]"
                      alt=""
                    />
                    <h4 className="font-semibold">
                      {product.title.length > 30
                        ? product.title.slice(0, 30) + "..."
                        : product.title}
                    </h4>
                    <p className="mt-3">${product.price}</p>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </motion.div>
      )}
    </>
  );
};

export default RelatedProducts;
