import React from 'react'
import { useParams } from 'react-router-dom'
import { useQuery } from '@apollo/client'
import frontGql from '@/service/frontGqls'

const useSnippetQuery = () => {
  const { slug } = useParams()
  return useQuery(frontGql.GET_SNIPPET, {
    variables: {
      slug
    }
  })
}

export default useSnippetQuery
