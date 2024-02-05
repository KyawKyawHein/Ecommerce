import React from 'react'
import Layout from './Layout'
import { CarouselSlide, CategoryLayout, Trending } from '../components'

const Home = () => {
  return (
    <Layout>
        <CarouselSlide/>
        <CategoryLayout/>
        <Trending/>
    </Layout>
  )
}

export default Home
