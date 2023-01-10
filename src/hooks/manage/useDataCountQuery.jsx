import React from 'react'
import { useQuery } from '@apollo/client'
import manageGql from '@/service/manageGqls'

const useDataCountQuery = (startDate, endDate) => {
  return useQuery(manageGql.GET_DATA_COUNT, {
    variables: {
      createdAt_gte: startDate,
      createdAt_lte: endDate
    }
  })
}

export default useDataCountQuery
