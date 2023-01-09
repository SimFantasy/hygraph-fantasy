import React from 'react'
import { ApolloProvider, ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client'
import { setContext } from '@apollo/client/link/context'
import { BrowserRouter } from 'react-router-dom'
import RootRoute from '@/router'
import RootStyle from '@/styles/root.style'
import { Layout } from '@/components'
import { contentUri, permanentToken } from '@/constants/config'

// Apollo Config
const httpLink = createHttpLink({
  uri: contentUri
})

const authLink = setContext((_, { headers }) => {
  const jwt = localStorage.getItem('fantasy-jwt')
  return {
    headers: {
      ...headers,
      authorization: jwt ? `Bearer ${permanentToken}` : ''
    }
  }
})

const apolloClient = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
})

const App = () => {
  return (
    <BrowserRouter>
      <ApolloProvider client={apolloClient}>
        <RootStyle />
        <Layout>
          <RootRoute />
        </Layout>
      </ApolloProvider>
    </BrowserRouter>
  )
}

export default App
