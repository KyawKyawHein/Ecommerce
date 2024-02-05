import React from 'react'
import Layout from './Layout'
import { CarouselSlide, CategoryLayout } from '../components'

const Home = () => {
  return (
    <Layout>
        <CarouselSlide/>
        <CategoryLayout/>
    </Layout>
  )
}

export default Home
