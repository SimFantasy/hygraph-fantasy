import React from 'react'
import { useQuery } from '@apollo/client'
import frontGql from '@/service/frontGqls'

const usePostCategoriesQuery = () => {
  return useQuery(frontGql.GET_POST_CATEGORIES)
}

export default usePostCategoriesQuery
