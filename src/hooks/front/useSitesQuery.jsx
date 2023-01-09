import React from 'react'
import { useQuery } from '@apollo/client'
import frontGql from '@/service/frontGqls'
import { listSitesCount } from '@/constants/settings'

const useSitesQuery = (page, category) => {
  const offset = (page - 1) * listSitesCount
  return useQuery(frontGql.GET_SITES, {
    variables: {
      first: listSitesCount,
      skip: offset,
      slug_contains: category
    }
  })
}

export default useSitesQuery
