import React, { memo } from 'react'
import { useAuthorQuery } from '@/hooks'
import { Spin } from '@/components'
import { AuthorWrap } from './style'

const Author = () => {
  const { data, loading } = useAuthorQuery()
  return (
    <AuthorWrap>
      {loading ? (
        <div className='author-container'>
          <div className='loading-spin'>
            <Spin />
          </div>
        </div>
      ) : (
        <div className='author-container'>
          <div className='author-avatar'>
            <img src={data?.author?.avatar?.url} />
          </div>
          <div className='author-info'>
            <div className='author-username'>{data?.author?.username}</div>
            <div className='author-bio'>{data?.author?.bio}</div>
          </div>
        </div>
      )}
    </AuthorWrap>
  )
}

export default memo(Author)
