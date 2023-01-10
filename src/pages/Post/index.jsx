import React from 'react'
import { RiCalendar2Line, RiFolder2Line } from 'react-icons/ri'
import { usePostQuery } from '@/hooks'
import { Spin, MarkdownContent } from '@/components'
import { fullDateFormat, serializationString } from '@/utils'
import { PostWrap } from './style'

const Post = () => {
  const { data, loading } = usePostQuery()

  if (loading)
    return (
      <PostWrap>
        <div className='container loading-spin'>
          <Spin />
        </div>
      </PostWrap>
    )

  const { coverImage, title, createdAt, postCategories, content, tags } = data.post

  return (
    <PostWrap>
      (
      <div className='container post-container'>
        <div className='post-cover'>
          <img src={coverImage} />
        </div>
        <div className='post-title'>{title}</div>
        <div className='post-info'>
          <div className='info-item'>
            <RiCalendar2Line />
            {fullDateFormat(createdAt)}
          </div>
          <div className='info-item'>
            <RiFolder2Line />
            {postCategories[0]?.name}
          </div>
        </div>
        <div className='post-content'>
          <MarkdownContent source={content} />
        </div>
        <div className='post-tags'>
          {serializationString(tags).map((tag, index) => (
            <div className='tag-item' key={index}>
              {tag}
            </div>
          ))}
        </div>
        <div className='divider'></div>
      </div>
      )
    </PostWrap>
  )
}

export default Post
