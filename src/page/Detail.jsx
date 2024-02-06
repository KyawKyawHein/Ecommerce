import React, { useEffect, useState } from "react";
import axios from "axios";
import {Carousel1,Carousel2,Carousel3} from "../assets/index"
import '@splidejs/react-splide/css/sea-green';
import Layout from "./Layout";
import { MainCarousel, ThumbnailCarousel } from "../components";

export default function Detail() {
  const [product, setProduct] = useState({});
  const [currentSlide,setCurrentSlide] = useState(0)
  const handleClickThumbnail= (index)=>{
    setCurrentSlide(index)
  }
  const images = [Carousel1,Carousel2,Carousel3]
  useEffect(() => {
    axios.get("https://fakestoreapi.com/products").then(({ data }) => {
      setProduct(data[0]);
    });
  }, []);
  return (
    <Layout>
        <div className="w-full flex justify-center gap-3 md:gap-6">
            <div className="w-full md:w-[700px]">
                <MainCarousel images={images} currentSlide={currentSlide}/>
                <ThumbnailCarousel images={images} onClickThumbnail={handleClickThumbnail}/>
            </div>
            
        </div>
    </Layout>
  );
}
