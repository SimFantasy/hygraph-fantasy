import React from 'react'
import { Link } from 'react-router-dom'
import { RiMenu2Line, RiLogoutBoxRLine, RiEarthLine } from 'react-icons/ri'
import { useAuthorQuery } from '@/hooks'
import { NavbarWrap } from './style'

const Navbar = ({ hideSidebar, setHideSidebar }) => {
  const { data: authorData, loading: authorLoading } = useAuthorQuery()

  const handleToggleSidebar = () => {
    setHideSidebar(!hideSidebar)
  }

  if (authorLoading) return <>Loading</>
  const { username, avatar } = authorData.author
  return (
    <NavbarWrap>
      <div className='toggle-btn' onClick={handleToggleSidebar}>
        <RiMenu2Line />
      </div>

      <div className='navbar-secondary'>
        <Link to='/home' target='_blank' className='homepage-btn'>
          <RiEarthLine />
        </Link>
        <div className='author-avatar'>
          <img src={avatar.url} />
        </div>
        <div className='author-name'>{username}</div>
        <div className='logout-btn'>
          <RiLogoutBoxRLine />
        </div>
      </div>
    </NavbarWrap>
  )
}

export default Navbar
