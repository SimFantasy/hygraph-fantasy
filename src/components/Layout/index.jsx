import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import FrontLayout from './FrontLayout'
import ManageLayout from './ManageLayout'

const Layout = ({ children }) => {
  const { pathname } = useLocation()
  const isMangePage = pathname.includes('/manage')
  return isMangePage ? (
    <ManageLayout>{children}</ManageLayout>
  ) : (
    <FrontLayout>{children}</FrontLayout>
  )
}

export default Layout
