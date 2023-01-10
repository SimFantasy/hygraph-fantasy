import React from 'react'
import { RiCalendar2Line, RiFolder2Line, RiLinkM } from 'react-icons/ri'
import { useSiteQuery } from '@/hooks'
import { Spin, MarkdownContent } from '@/components'
import { fullDateFormat, serializationString } from '@/utils'
import { SiteWrap } from './style'

const Site = () => {
  const { data, loading } = useSiteQuery()

  if (loading)
    return (
      <SiteWrap>
        <div className='container site-container'>
          <Spin />
        </div>
      </SiteWrap>
    )

  const { title, coverImage, createdAt, iconImage, link, content, tags, siteCategories } = data.site

  return (
    <SiteWrap>
      <div className='container site-container'>
        {coverImage && (
          <div className='site-cover'>
            <img src={coverImage} />
          </div>
        )}
        <div className='site-content'>
          <div className='site-titlebar'>
            <div className='site-icon'>
              <img src={iconImage} />
            </div>
            <div className='site-title'>{title}</div>
          </div>
          <div className='site-info'>
            <div className='info-item'>
              <RiCalendar2Line />
              {fullDateFormat(createdAt)}
            </div>
            <div className='info-item'>
              <RiFolder2Line />
              {siteCategories[0]?.name}
            </div>
          </div>
          <div className='site-description'>
            <MarkdownContent source={content} />
          </div>
          <div className='site-link'>
            <a href={link} target='_blank' rel='noopener noreferrer' className='link-btn'>
              <RiLinkM />
              Site Link
            </a>
          </div>

          <div className='site-tags'>
            {serializationString(tags)?.map((tag, index) => (
              <div className='tag-item' key={index}>
                {tag}
              </div>
            ))}
          </div>
        </div>
      </div>
    </SiteWrap>
  )
}

export default Site
