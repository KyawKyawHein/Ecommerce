import React from 'react'
import { Footer, Navbar } from '../components'

const Layout = ({children}) => {
  return (
    <>
        <Navbar/>
        <div>
            {children}
        </div>
        <Footer/>
    </>
  )
}

export default Layout
