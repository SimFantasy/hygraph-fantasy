import React from 'react'
import { useQuery } from '@apollo/client'
import frontGql from '@/service/frontGqls'

const useSnippetCategoriesQuery = () => {
  return useQuery(frontGql.GET_SNIPPET_CATEGORIES)
}

export default useSnippetCategoriesQuery
