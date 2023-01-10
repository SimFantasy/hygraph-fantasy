import React, { memo } from 'react'
import { SnippetItem, Spin, Pagination } from '@/components'
import { listSnippetsCount } from '@/constants/settings'
import { SnippetListWrap } from './style'

const SnippetList = ({ data, loading, page, setPage }) => {
  if (loading)
    return (
      <SnippetListWrap>
        <div className='loading-spin'>
          <Spin />
        </div>
      </SnippetListWrap>
    )

  const count = data?.snippetsConnection?.aggregate?.count
  const totalPages = Number(Math.ceil(count / listSnippetsCount))

  return (
    <SnippetListWrap>
      <div className='snippet-list-container'>
        {data?.snippetsConnection?.edges?.map(snippet => (
          <SnippetItem key={snippet?.node?.slug} {...snippet?.node} />
        ))}
      </div>
      {count > listSnippetsCount && (
        <Pagination page={page} setPage={setPage} totalPages={totalPages} />
      )}
    </SnippetListWrap>
  )
}

export default memo(SnippetList)
