import { useRoutes, Navigate } from 'react-router-dom'

import Home from '@/pages/Home'
import Posts from '@/pages/Home/Posts'
import Post from '@/pages/Home/Post'
import Portfolios from '@/pages/Home/Portfolios'
import Portfolio from '@/pages/Home/Portfolio'
import Page from '@/pages/Home/Page'
import Snippets from '@/pages/Home/Snippets'
import Snippet from '@/pages/Home/Snippet'
import Sites from '@/pages/Home/Sites'
import Site from '@/pages/Home/Site'

import Login from '@/pages/Login'

import Manage from '@/pages/Manage'
import PostsManage from '@/pages/Manage/Posts'
import PostCreate from '@/pages/Manage/Posts/Create'
import PostEdit from '@/pages/Manage/Posts/Edit'
import PortfoliosManage from '@/pages/Manage/Portfolios'
import PortfolioCreate from '@/pages/Manage/Portfolios/Create'
import PortfolioEdit from '@/pages/Manage/Portfolios/Edit'
import PagesManage from '@/pages/Manage/Pages'
import PageCreate from '@/pages/Manage/Pages/Create'
import PageEdit from '@/pages/Manage/Pages/Edit'
import SnippetsManage from '@/pages/Manage/Snippets'
import SnippetCreate from '@/pages/Manage/Snippets/Create'
import SnippetEdit from '@/pages/Manage/Snippets/Edit'
import SitesManage from '@/pages/Manage/Sites'
import SiteCreate from '@/pages/Manage/Sites/Create'
import SiteEdit from '@/pages/Manage/Sites/Edit'

const routes = [
  { path: '/', element: <Navigate to='/home' /> },
  { path: '/home', element: <Home /> },
  { path: '/posts', element: <Posts /> },
  { path: '/post/:slug', element: <Post /> },
  { path: '/portfolios', element: <Portfolios /> },
  { path: '/portfolio/:slug', element: <Portfolio /> },
  { path: '/:slug', element: <Page /> },
  { path: '/snippets', element: <Snippets /> },
  { path: '/snippet/:slug', element: <Snippet /> },
  { path: '/sites', element: <Sites /> },
  { path: '/site/:slug', element: <Site /> },
  { path: '/simanage-login', element: <Login /> },
  { path: '/manage', element: <Manage /> },
  { path: '/manage/posts', element: <PostsManage /> },
  { path: '/manage/post/create', element: <PostCreate /> },
  { path: '/manage/post/:id', element: <PostEdit /> },
  { path: '/manage/portfolios', element: <PortfoliosManage /> },
  { path: '/manage/portfolio/create', element: <PortfolioCreate /> },
  { path: '/manage/portfolio/:id', element: <PortfolioEdit /> },
  { path: '/manage/pages', element: <PagesManage /> },
  { path: '/manage/page/create', element: <PageCreate /> },
  { path: '/manage/page/:id', element: <PageEdit /> },
  { path: '/manage/snippets', element: <SnippetsManage /> },
  { path: '/manage/snippet/create', element: <SnippetCreate /> },
  { path: '/manage/snippet/:id', element: <SnippetEdit /> },
  { path: '/manage/sites', element: <SitesManage /> },
  { path: '/manage/site/create', element: <SiteCreate /> },
  { path: '/manage/site/:id', element: <SiteEdit /> }
]

const RootRoute = () => {
  const router = useRoutes(routes)
  return router
}

export default RootRoute
