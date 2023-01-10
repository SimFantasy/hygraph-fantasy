import React from 'react'
import { useQuery } from '@apollo/client'
import frontGql from '@/service/frontGqls'
import { featurePostsCount } from '@/constants/settings'

const useFeaturePostsQuery = () => {
  return useQuery(frontGql.GET_FEATURE_POSTS, {
    variables: { first: featurePostsCount }
  })
}

export default useFeaturePostsQuery
