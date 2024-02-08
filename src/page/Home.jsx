import React, { useEffect, useState } from 'react'
import Layout from './Layout'
import { CarouselSlide, CategoryLayout, Trending } from '../components'
import Products from '../components/Products/ShowProducts';
import axiosClient from '../axiosClient';

const Home = () => {
  const [products,setProducts] = useState();
  useEffect(() => {
    axiosClient.get("/products").then(({ data }) => {
      setProducts(data.data);
    });
  }, []);
  return (
    <Layout>
        <CarouselSlide/>
        <CategoryLayout/>
        <Trending products={products} title={"WOMEN'S TRENDING"}/>
        <Trending products={products} title={"MEN'S TRENDING"}/>
        <div className="flex justify-center">
          <div className="w-full md:w-[1400px]">
           <Products products={products}  />
          </div>
        </div>
    </Layout>
  )
}

export default Home
