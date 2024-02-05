import React, { useEffect, useState } from 'react'
import Layout from './Layout'
import { CarouselSlide, CategoryLayout, Trending } from '../components'
import axios from 'axios';

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
    </Layout>
  )
}

export default Home
