import React, { memo } from 'react'
import { SiteItem, Spin, Pagination } from '@/components'
import { listSitesCount } from '@/constants/settings'
import { SiteListWrap } from './style'

const SiteList = ({ data, loading, page, setPage }) => {
  if (loading)
    return (
      <SiteListWrap>
        <div className='loading-spin'>
          <Spin />
        </div>
      </SiteListWrap>
    )

  const count = data?.sitesConnection?.aggregate?.count
  const totalPages = Number(Math.ceil(count / listSitesCount))

  return (
    <SiteListWrap>
      <div className='site-list-container'>
        {data?.sitesConnection?.edges?.map(site => (
          <SiteItem key={site?.node?.slug} {...site?.node} />
        ))}
      </div>
      {count > listSitesCount && (
        <Pagination page={page} setPage={setPage} totalPages={totalPages} />
      )}
    </SiteListWrap>
  )
}

export default memo(SiteList)
