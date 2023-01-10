import React from 'react'
import { useParams } from 'react-router-dom'
import { useQuery } from '@apollo/client'
import frontGql from '@/service/frontGqls'

const usePageQuery = () => {
  const { slug } = useParams()
  return useQuery(frontGql.GET_PAGE, {
    variables: {
      slug
    }
  })
}

export default usePageQuery
