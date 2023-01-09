import React from 'react'
import { useQuery } from '@apollo/client'
import frontGql from '@/service/frontGqls'
import { featureSnippetsCount } from '@/constants/settings'

const useFeatureSnippetsQuery = () => {
  return useQuery(frontGql.GET_FEATURE_SNIPPETS, {
    variables: {
      first: featureSnippetsCount
    }
  })
}

export default useFeatureSnippetsQuery
