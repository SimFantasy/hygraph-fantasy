import React from 'react'
import { useQuery } from '@apollo/client'
import frontGql from '@/service/frontGqls'
import { listPostsCount } from '@/constants/settings'

const usePostsQuery = (page, category) => {
  const offset = (page - 1) * listPostsCount
  return useQuery(frontGql.GET_POSTS, {
    variables: {
      first: listPostsCount,
      skip: offset,
      slug_contains: category
    }
  })
}

export default usePostsQuery
