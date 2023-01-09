import React from 'react'
import { useQuery } from '@apollo/client'
import frontGql from '@/service/frontGqls'

const useSiteCategoriesQuery = () => {
  return useQuery(frontGql.GET_SITE_CATEGORIES)
}

export default useSiteCategoriesQuery
