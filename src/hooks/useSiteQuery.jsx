import React from 'react'
import { useParams } from 'react-router-dom'
import { useQuery } from '@apollo/client'
import frontGql from '@/service/frontGqls'

const useSiteQuery = () => {
  const { slug } = useParams()
  return useQuery(frontGql.GET_SITE, {
    variables: {
      slug
    }
  })
}

export default useSiteQuery
