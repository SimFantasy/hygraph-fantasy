import React from 'react'
import { useParams } from 'react-router-dom'
import { useQuery } from '@apollo/client'
import frontGql from '@/service/frontGqls'

const usePostQuery = config => {
  const { slug } = useParams()
  return useQuery(frontGql.GET_POST, {
    variables: { slug },
    ...config
  })
}

export default usePostQuery
