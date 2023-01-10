import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import cx from 'clsx'
import { RiTyphoonFill, RiMenuLine, RiCloseLine } from 'react-icons/ri'
import { siteName } from '@/constants/settings'
import { useTheme, useScrollLock } from '@/hooks'
import { headerNavs } from '@/constants/navs'
import { HeaderWrap } from './style'

const Header = () => {
  const { theme, toggleTheme } = useTheme()
  const { lockState, toggleLock } = useScrollLock()
  const [isNavVisible, setIsNavVisible] = useState(false)

  const handleToggleNav = () => {
    setIsNavVisible(!isNavVisible)
    toggleLock()
  }

  const handleClickNavLink = () => {
    setIsNavVisible(false)
    toggleLock()
  }
  return (
    <HeaderWrap>
      <section className='container header-container'>
        <div className='logo'>
          <RiTyphoonFill />
          <span className='logo-text'>{siteName}</span>
        </div>
        <nav className='navs'>
          {headerNavs?.map((nav, index) => (
            <NavLink to={nav.route} key={nav.route} className='nav-item'>
              {nav.name}
            </NavLink>
          ))}
        </nav>
        <div className={cx('theme-btn', { dark: theme === 'dark' })} onClick={toggleTheme}></div>

        <section className='m-nav-container'>
          <div className='m-nav-btn' onClick={handleToggleNav}>
            {isNavVisible ? <RiCloseLine /> : <RiMenuLine />}
          </div>
          <div className={cx('m-nav-main', { active: isNavVisible })}>
            <div className='m-navs'>
              {headerNavs?.map(nav => (
                <NavLink
                  to={nav.route}
                  key={nav.route}
                  className='m-nav-item'
                  onClick={handleClickNavLink}
                >
                  {nav.name}
                </NavLink>
              ))}
            </div>
          </div>
        </section>
      </section>
    </HeaderWrap>
  )
}

export default Header
