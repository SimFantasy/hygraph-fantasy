import React, { memo } from 'react'
import { Link } from 'react-router-dom'
import { snippetIcon, serializationString } from '@/utils'
import { SnippetItemWrap } from './style'

const SnippetItem = ({ slug, title, snippetCategories, tags }) => {
  return (
    <SnippetItemWrap>
      <div className='snippet-item-category'>
        <div className='category-icon'>{snippetIcon(snippetCategories[0]?.slug)}</div>
        <div className='category-text'>{snippetCategories[0]?.name}</div>
      </div>
      <Link to={`/snippet/${slug}`} className='snippet-item-title'>
        {title}
      </Link>
    </SnippetItemWrap>
  )
}

export default memo(SnippetItem)
