import React from 'react'
import { useQuery } from '@apollo/client'
import frontGql from '@/service/frontGqls'
import { listSnippetsCount } from '@/constants/settings'

const useSnippetsQuery = (page, category) => {
  const offset = (page - 1) * listSnippetsCount
  return useQuery(frontGql.GET_SNIPPETS, {
    variables: {
      first: listSnippetsCount,
      skip: offset,
      slug_contains: category
    }
  })
}

export default useSnippetsQuery
