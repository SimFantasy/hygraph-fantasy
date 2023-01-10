import React from 'react'
import {
  RiApps2Line,
  RiArticleLine,
  RiPlantLine,
  RiFileCodeLine,
  RiLinkM,
  RiPagesLine
} from 'react-icons/ri'

export const headerNavs = [
  { name: 'Home', route: '/home' },
  { name: 'Post', route: '/posts' },
  { name: 'Portfolio', route: '/portfolios' },
  { name: 'Snippte', route: '/snippets' },
  { name: 'Site', route: '/sites' },
  { name: 'About', route: '/about' }
]

export const sidebarNavs = [
  { name: 'Dashboard', route: '/manage', icon: <RiApps2Line /> },
  { name: 'Post Manage', route: '/manage/posts', icon: <RiArticleLine /> },
  { name: 'Portfolio Manage', route: '/manage/portfolios', icon: <RiPlantLine /> },
  { name: 'Snippet Manage', route: '/manage/snippets', icon: <RiFileCodeLine /> },
  { name: 'Site Manage', route: '/manage/sites', icon: <RiLinkM /> },
  { name: 'Page Manage', route: '/manage/pages', icon: <RiPagesLine /> }
]

export const dataCountCards = [
  { name: 'Posts', icon: <RiArticleLine /> },
  { name: 'Portfolios', icon: <RiPlantLine /> },
  { name: 'Snippets', icon: <RiFileCodeLine /> },
  { name: 'Sites', icon: <RiLinkM /> },
  { name: 'Pages', icon: <RiPagesLine /> }
]
