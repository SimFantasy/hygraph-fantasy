import React from 'react'
import { NavLink } from 'react-router-dom'
import { RiTyphoonFill } from 'react-icons/ri'
import { siteName } from '@/constants/settings'
import { sidebarNavs } from '@/constants/navs'
import { SidebarWrap } from './style'

const Sidebar = () => {
  return (
    <SidebarWrap>
      <section className='logo'>
        <RiTyphoonFill />
        <span className='logo-text'>{siteName}</span>
      </section>
      <nav className='navs'>
        {sidebarNavs.map((nav, index) => (
          <NavLink to={`${nav.route}`} key={index} className='nav-item'>
            <div className='nav-icon'>{nav.icon}</div>
            <div className='nav-text'>{nav.name}</div>
          </NavLink>
        ))}
      </nav>
    </SidebarWrap>
  )
}

export default Sidebar
