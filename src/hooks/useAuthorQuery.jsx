import React from 'react'
import { useQuery } from '@apollo/client'
import frontGql from '@/service/frontGqls'
import { authorId } from '@/constants/settings'

const useAuthorQuery = () => {
  return useQuery(frontGql.GET_AUTHOR, {
    variables: { id: authorId }
  })
}

export default useAuthorQuery
