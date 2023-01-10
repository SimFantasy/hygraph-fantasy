import React from 'react'
import { useQuery } from '@apollo/client'
import frontGql from '@/service/frontGqls'
import { listPortfoliosCount } from '@/constants/settings'

const usePortfoliosQuery = (page, category) => {
  const offset = (page - 1) * listPortfoliosCount
  return useQuery(frontGql.GET_PORTFOLIOS, {
    variables: {
      first: listPortfoliosCount,
      skip: offset,
      slug_contains: category
    }
  })
}

export default usePortfoliosQuery
