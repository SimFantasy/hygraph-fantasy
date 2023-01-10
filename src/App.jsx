import React from 'react'
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client'
import { BrowserRouter } from 'react-router-dom'
import RootRoute from '@/router'
import RootStyle from '@/styles/root.style'
import { Layout } from '@/components'
import { contentUri } from '@/constants/config'

const App = () => {
  const apolloClient = new ApolloClient({
    uri: contentUri,
    cache: new InMemoryCache()
  })

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
