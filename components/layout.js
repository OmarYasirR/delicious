import React from 'react'
import Footer from './Footer'
import Navbar from './navbar'

function layout({children}) {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  )
}

export default layout