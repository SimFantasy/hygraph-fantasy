import React from 'react'
import { useMonthDateRange, useDataCountQuery } from '@/hooks'
import { Spin } from '@/components'
import { dataCountCards } from '@/constants/navs'
import { DataCountListWrap } from './style'

const DataCountList = () => {
  const { startDate, endDate } = useMonthDateRange()
  const { data, loading } = useDataCountQuery(startDate, endDate)

  if (loading)
    return (
      <DataCountListWrap>
        <div className='loading-spin'>
          <Spin />
        </div>
      </DataCountListWrap>
    )

  const temps = dataCountCards
  for (const item of temps) {
    const connectionName = `${item.name.toLowerCase()}Connection`
    const count = data[connectionName].aggregate.count
    item.count = count
  }

  return (
    <DataCountListWrap>
      {temps?.map(item => (
        <div className='page-card data-count-item' key={item.name}>
          <div className='item-topbar'>
            <div className='item-title'>{item.name}</div>
            <div className='item-icon'>{item.icon}</div>
          </div>
          <div className='item-count'>{item.count}</div>
          <div className='item-sub-title'>Monthly Add</div>
        </div>
      ))}
    </DataCountListWrap>
  )
}

export default DataCountList
