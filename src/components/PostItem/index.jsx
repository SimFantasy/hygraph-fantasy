import React, { memo } from 'react'
import { Link } from 'react-router-dom'
import { RiCalendarTodoLine, RiFolder3Line } from 'react-icons/ri'
import { dateNowFormat } from '@/utils'
import { PostItemWrap } from './style'

const PostItem = ({
  coverImage,
  title,
  slug,
  postCategories,
  description,
  createdAt,
  isVisibleCover
}) => {
  return (
    <PostItemWrap>
      {isVisibleCover && (
        <Link to={`/post/${slug}`} className='post-item-cover'>
          <img src={coverImage} />
        </Link>
      )}

      <div className='post-item-container'>
        <Link to={`/post/${slug}`} className='post-item-title'>
          {title}
        </Link>
        <div className='post-item-info'>
          <div className='info-item'>
            <RiCalendarTodoLine />
            {dateNowFormat(createdAt)}
          </div>
          <div className='info-item'>
            <RiFolder3Line />
            {postCategories[0]?.name}
          </div>
        </div>
        <div className='post-item-description'>{description}</div>
      </div>
    </PostItemWrap>
  )
}

export default memo(PostItem)
