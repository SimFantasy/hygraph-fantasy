import React, { useState } from 'react'
import { RiCalendar2Line, RiFolder2Line } from 'react-icons/ri'
import { usePortfolioQuery } from '@/hooks'
import { Spin, MarkdownContent } from '@/components'
import { fullDateFormat, serializationString } from '@/utils'
import { PortfolioWrap } from './style'

const Portfolio = () => {
  const { data, loading } = usePortfolioQuery()

  if (loading)
    return (
      <PortfolioWrap>
        <div className='container portfolio-container'>
          <div className='loading-spin'>
            <Spin />
          </div>
        </div>
      </PortfolioWrap>
    )

  const { coverImage, title, createdAt, portfolioCategories, introduction, tags, gallery } =
    data.portfolio

  return (
    <PortfolioWrap>
      <div className='container portfolio-container'>
        <div className='portfolio-cover'>
          <img src={coverImage} />
        </div>
        <div className='portfolio-title'>{title}</div>
        <div className='portfolio-info'>
          <div className='info-item'>
            <RiCalendar2Line />
            {fullDateFormat(createdAt)}
          </div>
          <div className='info-item'>
            <RiFolder2Line />
            {portfolioCategories[0]?.name}
          </div>
        </div>
        <div className='portfolio-introduction'>
          <MarkdownContent source={introduction} />
        </div>
        <div className='portfolio-tags'>
          {serializationString(tags)?.map((tag, index) => (
            <div className='tag-item' key={index}>
              {tag}
            </div>
          ))}
        </div>
        <div className='divider'></div>
        <div className='portfolio-gallery'>
          {gallery?.map((item, index) => (
            <div className='gallery-item' key={index}>
              <div className='gallery-item-image'>
                <img src={item.imageUrl} />
              </div>
              {item.title && <div className='gallery-item-title'>{item.title}</div>}
            </div>
          ))}
        </div>
      </div>
    </PortfolioWrap>
  )
}

export default Portfolio
