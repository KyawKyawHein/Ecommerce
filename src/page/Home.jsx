import React, { useEffect, useState } from 'react'
import Layout from './Layout'
import { CarouselSlide, CategoryLayout, Trending } from '../components'
import axios from 'axios';
import Products from '../components/Products/ShowProducts';

const Home = () => {
  const [womanProducts,setWomanProducts] = useState();
  useEffect(() => {
    axios.get("https://fakestoreapi.com/products").then(({ data }) => {
      setWomanProducts(data);
    });
  }, []);
  return (
    <Layout>
        <CarouselSlide/>
        <CategoryLayout/>
        <Trending products={womanProducts} title={"WOMEN'S TRENDING"}/>
        <Trending products={womanProducts} title={"MEN'S TRENDING"}/>
        <div className="flex justify-center">
          <div className="w-full md:w-[1400px]">
           <Products products={womanProducts}  />
          </div>
        </div>
    </Layout>
  )
}

export default Home
