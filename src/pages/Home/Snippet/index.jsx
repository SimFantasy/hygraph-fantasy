import React from 'react'
import { RiCalendar2Line, RiFolder2Line } from 'react-icons/ri'
import { useSnippetQuery } from '@/hooks'
import { Spin, MarkdownContent } from '@/components'
import { fullDateFormat, serializationString } from '@/utils'
import { SnippetWrap } from './style'

const Snippet = () => {
  const { data, loading } = useSnippetQuery()
  if (loading)
    return (
      <SnippetWrap>
        <div className='container loading-spin'>
          <Spin />
        </div>
      </SnippetWrap>
    )
  const { title, createdAt, snippetCategories, tags, content } = data.snippet
  console.log('data', data)
  return (
    <SnippetWrap>
      <div className='container snippet-container'>
        <div className='snippet-title'>{title}</div>
        <div className='snippet-info'>
          <div className='info-item'>
            <RiCalendar2Line />
            {fullDateFormat(createdAt)}
          </div>
          <div className='info-item'>
            <RiFolder2Line />
            {snippetCategories[0]?.name}
          </div>
        </div>
        <div className='snippet-content'>
          <MarkdownContent source={content} />
        </div>
        <div className='snippet-tags'>
          {serializationString(tags)?.map((tag, index) => (
            <div className='tag-item' key={index}>
              {tag}
            </div>
          ))}
        </div>
      </div>
    </SnippetWrap>
  )
}

export default Snippet
