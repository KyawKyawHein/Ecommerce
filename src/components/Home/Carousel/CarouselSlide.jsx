import React from 'react'
import { Carousel } from 'flowbite-react';
import "./carouselSlide.css"
import { Carousel1,Carousel2, Carousel3 } from '../../../assets';
import { Link } from 'react-router-dom';

export default function CarouselSlide() {
  return (
    <div className="h-screen">
        <Carousel >
          <div className="relative">
           <img src={Carousel1} className='h-screen'/>
           <div className="absolute scale-up-center top-[30%] left-[60px] font-extrabold text-white">
              <p className='uppercase mb-6 text-1xl'>authum collection</p>
              <h4 className="uppercase text-2xl text-5xl my-3 font-semibold">find your</h4>
              <h2 className="uppercase text-3xl text-8xl">perfect</h2>
              <p className="my-5 font-extrabold">Uncomprosing in style, quality and performance</p>
              <Link to={"/products"} className='my-5 uppercase px-10 py-4 bg-white text-black'>Shop Now</Link>
           </div>
          </div>
          <div className="relative">
           <img src={Carousel2} className='h-screen'/>
           <div className="absolute scale-up-center top-[30%] left-[60px] font-extrabold text-white">
              <p className='uppercase mb-6 text-1xl'>shirt collection</p>
              <h4 className="uppercase text-2xl text-5xl my-3 font-semibold">fashion</h4>
              <h2 className="uppercase text-3xl text-8xl">trending</h2>
              <p className="my-5 font-extrabold">Uncomprosing in style, quality and performance</p>
              <Link to={'/products'} className='my-5 uppercase px-10 py-4 bg-white text-black'>Shop Now</Link>
           </div>
          </div>
          <div className="relative">
           <img src={Carousel3} className='h-screen'/>
           <div className="absolute scale-up-center top-[30%] left-[60px] font-extrabold text-white">
              <p className='uppercase mb-6 text-1xl'>Women trending</p>
              <h4 className="uppercase text-2xl text-5xl my-3 font-semibold">wearing</h4>
              <h2 className="uppercase text-3xl text-8xl">minimalist</h2>
              <p className="my-5 font-extrabold">Uncomprosing in style, quality and performance</p>
              <Link to={'/products'} className='my-5 uppercase px-10 py-4 bg-white text-black'>Shop Now</Link>
           </div>
          </div>
        </Carousel>
     </div>
  )
}
