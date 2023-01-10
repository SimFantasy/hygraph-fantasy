import React from 'react'
import { useQuery } from '@apollo/client'
import frontGql from '@/service/frontGqls'
import { featureSitesCount } from '@/constants/settings'

const useFeatureSitesQuery = () => {
  return useQuery(frontGql.GET_FEATURE_SITES, {
    variables: {
      first: featureSitesCount
    }
  })
}

export default useFeatureSitesQuery
