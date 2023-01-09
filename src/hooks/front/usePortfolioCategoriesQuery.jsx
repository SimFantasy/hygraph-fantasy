import React from 'react'
import { useQuery } from '@apollo/client'
import frontGql from '@/service/frontGqls'

const usePortfolioCategoriesQuery = () => {
  return useQuery(frontGql.GET_PORTFOLIO_CATEGORIES)
}

export default usePortfolioCategoriesQuery
