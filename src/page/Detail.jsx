import React, { useEffect, useState } from "react";
import axios from "axios";
import {Carousel1,Carousel2,Carousel3} from "../assets/index"
import '@splidejs/react-splide/css/sea-green';
import Layout from "./Layout";
import { MainCarousel, ProductDetail, RelatedProducts, ThumbnailCarousel } from "../components";

export default function Detail() {
  const [product, setProduct] = useState({});
  const [products,setProducts] = useState([]);
  const [currentSlide,setCurrentSlide] = useState(0)
  const handleClickThumbnail= (index)=>{
    setCurrentSlide(index)
  }
  const images = [Carousel1,Carousel2,Carousel3]
  useEffect(() => {
    axios.get("https://fakestoreapi.com/products").then(({ data }) => {
        setProducts(data);
        setProduct(data[0]);
    });
  }, []);
  return (
    <Layout>
        <div className="w-full flex justify-center">
           <div className="lg:w-[1300px] ">
                <div className="block md:flex gap-3 lg:gap-10 lg:py-7">
                    <div className="w-full md:w-[600px]">
                        <MainCarousel images={images} currentSlide={currentSlide}/>
                        <ThumbnailCarousel images={images} onClickThumbnail={handleClickThumbnail}/>
                    </div>
                    <ProductDetail product={product}/>
                </div>
                <RelatedProducts products={products} />
           </div>
        </div>
    </Layout>
  );
}
