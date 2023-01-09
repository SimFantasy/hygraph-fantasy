import React from 'react'
import { useParams } from 'react-router-dom'
import { useQuery } from '@apollo/client'
import frontGql from '@/service/frontGqls'

const usePortfolioQuery = config => {
  const { slug } = useParams()
  return useQuery(frontGql.GET_PORTFOLIO, {
    variables: {
      slug
    },
    ...config
  })
}

export default usePortfolioQuery
