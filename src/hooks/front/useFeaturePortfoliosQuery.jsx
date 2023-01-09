import React from 'react'
import { useQuery } from '@apollo/client'
import frontGql from '@/service/frontGqls'
import { featurePortfoliosCount } from '@/constants/settings'

const useFeaturePortfoliosQuery = () => {
  return useQuery(frontGql.GET_FEATURE_PORTFOLIOS, {
    variables: {
      first: featurePortfoliosCount
    }
  })
}

export default useFeaturePortfoliosQuery
