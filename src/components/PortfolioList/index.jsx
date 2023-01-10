import React, { memo } from 'react'
import { PortfolioItem, Spin, Pagination } from '@/components'
import { listPortfoliosCount } from '@/constants/settings'
import { PortfolioListWrap } from './style'

const PortfolioList = ({ data, loading, page, setPage }) => {
  if (loading)
    return (
      <PortfolioListWrap>
        <div className='loading-spin'>
          <Spin />
        </div>
      </PortfolioListWrap>
    )

  const count = data?.portfoliosConnection?.aggregate?.count
  const totalPages = Number(Math.ceil(count / listPortfoliosCount))

  return (
    <PortfolioListWrap>
      <div className='portfolio-list-container'>
        {data?.portfoliosConnection?.edges.map(portfolio => (
          <PortfolioItem key={portfolio?.node?.slug} {...portfolio?.node} />
        ))}
      </div>
      {count > listPortfoliosCount && (
        <Pagination page={page} setPage={setPage} totalPages={totalPages} />
      )}
    </PortfolioListWrap>
  )
}

export default memo(PortfolioList)
