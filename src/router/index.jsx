import { useRoutes, Navigate } from 'react-router-dom'

import Home from '@/pages/Home'
import Posts from '@/pages/Posts'
import Post from '@/pages/Post'
import Portfolios from '@/pages/Portfolios'
import Portfolio from '@/pages/Portfolio'
import Page from '@/pages/Page'
import Snippets from '@/pages/Snippets'
import Snippet from '@/pages/Snippet'
import Sites from '@/pages/Sites'
import Site from '@/pages/Site'

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
  { path: '/site/:slug', element: <Site /> }
]

const RootRoute = () => {
  const router = useRoutes(routes)
  return router
}

export default RootRoute
