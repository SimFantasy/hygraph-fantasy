import React, { memo } from 'react'
import { PostItem, Spin, Pagination } from '@/components'
import { listPostsCount } from '@/constants/settings'
import { PostListWrap } from './style'

const PostList = ({ data, loading, isVisibleCover, page, setPage }) => {
  if (loading)
    return (
      <PostListWrap>
        <div className='loading-spin'>
          <Spin />
        </div>
      </PostListWrap>
    )

  const count = data?.postsConnection?.aggregate?.count
  const totalPages = Number(Math.ceil(count / listPostsCount))

  return (
    <PostListWrap>
      <div className='post-list-container'>
        {data?.postsConnection?.edges?.map(post => (
          <PostItem key={post?.node?.slug} {...post?.node} isVisibleCover={isVisibleCover} />
        ))}
      </div>
      {count > listPostsCount && (
        <Pagination page={page} setPage={setPage} totalPages={totalPages} />
      )}
    </PostListWrap>
  )
}

export default memo(PostList)
