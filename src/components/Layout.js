import React, { Fragment } from 'react'
import Navbar from "./Navbar"
import Footer from "./Footer"
// import "normalize.css"
import "../assets/css/main.css"


const Layout = ({children}) => {
  return (
      <>
    <Navbar/>
    { children }
    <Footetr/>
    </>
  )
}

export default Layout