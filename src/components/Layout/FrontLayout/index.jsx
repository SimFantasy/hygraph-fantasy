import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { FrontLayoutWrap } from './style'

const FrontLayout = ({ children }) => {
  return (
    <FrontLayoutWrap>
      <Header />
      <main className='layout-main'>{children}</main>
      <Footer />
    </FrontLayoutWrap>
  )
}

export default FrontLayout
