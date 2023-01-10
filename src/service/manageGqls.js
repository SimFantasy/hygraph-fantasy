import { gql } from '@apollo/client'

const GET_DATA_COUNT = gql`
  query dataCount($createdAt_lte: DateTime!, $createdAt_gte: DateTime!) {
    pagesConnection(where: { createdAt_lte: $createdAt_lte, createdAt_gte: $createdAt_gte }) {
      aggregate {
        count
      }
    }
    portfoliosConnection(where: { createdAt_lte: $createdAt_lte, createdAt_gte: $createdAt_gte }) {
      aggregate {
        count
      }
    }
    postsConnection(where: { createdAt_lte: $createdAt_lte, createdAt_gte: $createdAt_gte }) {
      aggregate {
        count
      }
    }
    sitesConnection(where: { createdAt_lte: $createdAt_lte, createdAt_gte: $createdAt_gte }) {
      aggregate {
        count
      }
    }
    snippetsConnection(where: { createdAt_lte: $createdAt_lte, createdAt_gte: $createdAt_gte }) {
      aggregate {
        count
      }
    }
  }
`

export default {
  GET_DATA_COUNT
}
