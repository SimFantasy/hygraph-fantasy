import React, { memo } from 'react'
import { Link } from 'react-router-dom'
import { RiLinkM, RiFolder3Line } from 'react-icons/ri'
import { SiteItemWrap } from './style'

const SiteItem = ({ slug, title, iconImage, description, link, siteCategories }) => {
  return (
    <SiteItemWrap>
      <div className='site-item-container'>
        <Link to={`/site/${slug}`} className='site-item-titlebar'>
          <div className='site-item-icon'>
            <img src={iconImage} />
          </div>
          <div className='site-item-title'>{title}</div>
        </Link>
        <div className='site-item-description'>{description}</div>
        <div className='site-item-info'>
          <div className='info-item'>
            <RiFolder3Line />
            {siteCategories[0]?.name}
          </div>
          <div className='info-item'>
            <a href={link} target='_blank' rel='noopener noreferrer' className='link-btn'>
              <RiLinkM />
              Site link
            </a>
          </div>
        </div>
      </div>
    </SiteItemWrap>
  )
}

export default memo(SiteItem)
