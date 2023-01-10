import React, { useState } from 'react'
import cx from 'clsx'
import Sidebar from './Sidebar'
import Navbar from './Navbar'
import { ManageLayoutWrap } from './style'

const ManageLayout = ({ children }) => {
  const [hideSidebar, setHideSidebar] = useState(false)
  return (
    <ManageLayoutWrap className={cx({ hide: hideSidebar })}>
      <div className='layout-sidebar'>
        <Sidebar />
      </div>
      <section className='layout-container'>
        <div className='layout-navbar'>
          <Navbar hideSidebar={hideSidebar} setHideSidebar={setHideSidebar} />
        </div>
        <main className='layout-main'>{children}</main>
      </section>
    </ManageLayoutWrap>
  )
}

export default ManageLayout
