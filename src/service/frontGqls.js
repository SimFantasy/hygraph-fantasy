import { gql } from '@apollo/client'

const GET_AUTHOR = gql`
  query getAuthor($id: ID!) {
    author(where: { id: $id }) {
      bio
      username
      avatar {
        url
      }
    }
  }
`

const GET_FEATURE_POSTS = gql`
  query featurePosts($first: Int!) {
    postsConnection(first: $first, orderBy: createdAt_DESC, where: { isFeature: true }) {
      edges {
        node {
          coverImage
          createdAt
          description
          slug
          title
          postCategories {
            name
          }
        }
      }
    }
  }
`

const GET_POSTS = gql`
  query posts($first: Int!, $skip: Int!, $slug_contains: String = "") {
    postsConnection(
      first: $first
      skip: $skip
      orderBy: createdAt_DESC
      where: { postCategories_every: { slug_contains: $slug_contains } }
    ) {
      edges {
        node {
          coverImage
          createdAt
          description
          postCategories {
            name
            slug
          }
          slug
          title
        }
      }
      pageInfo {
        hasNextPage
        hasPreviousPage
      }
      aggregate {
        count
      }
    }
  }
`

const GET_POST = gql`
  query post($slug: String!) {
    post(where: { slug: $slug }) {
      title
      content
      coverImage
      createdAt
      tags
      postCategories {
        name
      }
    }
  }
`

const GET_POST_CATEGORIES = gql`
  query postCategories {
    postCategories {
      name
      slug
    }
  }
`

const GET_FEATURE_PORTFOLIOS = gql`
  query featurePortfolio($first: Int!) {
    portfoliosConnection(first: $first, orderBy: createdAt_DESC, where: { isFeature: true }) {
      edges {
        node {
          coverImage
          title
          slug
        }
      }
    }
  }
`

const GET_PORTFOLIOS = gql`
  query portfolios($first: Int!, $skip: Int!, $slug_contains: String = "") {
    portfoliosConnection(
      first: $first
      skip: $skip
      orderBy: createdAt_DESC
      where: { portfolioCategories_every: { slug_contains: $slug_contains } }
    ) {
      edges {
        node {
          coverImage
          title
          slug
        }
      }
      pageInfo {
        hasNextPage
        hasPreviousPage
      }
      aggregate {
        count
      }
    }
  }
`

const GET_PORTFOLIO = gql`
  query portfolio($slug: String!) {
    portfolio(where: { slug: $slug }) {
      coverImage
      createdAt
      slug
      tags
      title
      introduction
      portfolioCategories {
        name
      }
      gallery {
        ... on Gallery {
          imageUrl
          title
        }
      }
    }
  }
`

const GET_PORTFOLIO_CATEGORIES = gql`
  query portfolioCategories {
    portfolioCategories {
      name
      slug
    }
  }
`

const GET_FEATURE_SNIPPETS = gql`
  query featureSnippets($first: Int!) {
    snippetsConnection(first: $first, orderBy: createdAt_DESC, where: { isFeature: true }) {
      edges {
        node {
          slug
          title
          tags
          snippetCategories {
            name
            slug
          }
        }
      }
    }
  }
`

const GET_SNIPPETS = gql`
  query snippets($first: Int!, $skip: Int!, $slug_contains: String = "") {
    snippetsConnection(
      first: $first
      skip: $skip
      orderBy: createdAt_DESC
      where: { snippetCategories_every: { slug_contains: $slug_contains } }
    ) {
      edges {
        node {
          slug
          tags
          title
          snippetCategories {
            name
            slug
          }
        }
      }
      pageInfo {
        hasNextPage
        hasPreviousPage
      }
      aggregate {
        count
      }
    }
  }
`

const GET_SNIPPET = gql`
  query snippet($slug: String = "use-the-split-function-of-javascript-to-split-strings") {
    snippet(where: { slug: $slug }) {
      content
      createdAt
      tags
      title
      snippetCategories {
        name
      }
    }
  }
`

const GET_SNIPPET_CATEGORIES = gql`
  query snippetCategories {
    snippetCategories {
      name
      slug
    }
  }
`

const GET_FEATURE_SITES = gql`
  query featureSites($first: Int!) {
    sitesConnection(first: $first, orderBy: createdAt_DESC, where: { isFeature: true }) {
      edges {
        node {
          link
          iconImage
          title
          description
          slug
          siteCategories {
            name
          }
        }
      }
    }
  }
`

const GET_SITES = gql`
  query sites($first: Int!, $skip: Int!, $slug_contains: String = "") {
    sitesConnection(
      first: $first
      skip: $skip
      orderBy: createdAt_DESC
      where: { siteCategories_every: { slug_contains: $slug_contains } }
    ) {
      edges {
        node {
          description
          iconImage
          link
          slug
          title
          siteCategories {
            name
          }
        }
      }
      pageInfo {
        hasNextPage
        hasPreviousPage
      }
      aggregate {
        count
      }
    }
  }
`

const GET_SITE = gql`
  query site($slug: String = "react-vant") {
    site(where: { slug: $slug }) {
      coverImage
      createdAt
      content
      iconImage
      link
      tags
      title
      slug
      siteCategories {
        name
      }
    }
  }
`

const GET_SITE_CATEGORIES = gql`
  query siteCategories {
    siteCategories {
      name
      slug
    }
  }
`

const GET_PAGE = gql`
  query page($slug: String!) {
    page(where: { slug: $slug }) {
      content
      coverImage
      title
    }
  }
`

export default {
  GET_AUTHOR,
  GET_FEATURE_POSTS,
  GET_POSTS,
  GET_POST,
  GET_POST_CATEGORIES,
  GET_FEATURE_PORTFOLIOS,
  GET_PORTFOLIOS,
  GET_PORTFOLIO,
  GET_PORTFOLIO_CATEGORIES,
  GET_FEATURE_SNIPPETS,
  GET_SNIPPETS,
  GET_SNIPPET,
  GET_SNIPPET_CATEGORIES,
  GET_FEATURE_SITES,
  GET_SITES,
  GET_SITE,
  GET_SITE_CATEGORIES,
  GET_PAGE
}
