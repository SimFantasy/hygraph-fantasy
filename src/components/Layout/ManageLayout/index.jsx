import React from 'react'
import Sidebar from './Sidebar'
import Navbar from './Navbar'
import { ManageLayoutWrap } from './style'

const ManageLayout = ({ children }) => {
  return (
    <ManageLayoutWrap>
      <Sidebar />
      <section className='layout-container'>
        <Navbar />
        <main className='layout-main'>{children}</main>
      </section>
    </ManageLayoutWrap>
  )
}

export default ManageLayout
