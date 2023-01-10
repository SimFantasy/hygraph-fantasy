import React, { memo } from 'react'
import { Link } from 'react-router-dom'
import { PortfoliItemWrap } from './style'

const PortfolioItem = ({ coverImage, title, slug }) => {
  return (
    <PortfoliItemWrap>
      <Link to={`/portfolio/${slug}`} className='portfolio-item-cover'>
        <div className='portfolio-item-image'>
          <img src={coverImage} />
        </div>
      </Link>
      <Link to={`/portfolio/${slug}`} className='portfolio-item-title'>
        {title}
      </Link>
    </PortfoliItemWrap>
  )
}

export default memo(PortfolioItem)
