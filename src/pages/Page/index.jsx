import React from 'react'
import { usePageQuery } from '@/hooks'
import { ListTitlebar, Spin, MarkdownContent } from '@/components'
import { PageWrap } from './style'

const Page = () => {
  const { data, loading } = usePageQuery()

  return (
    <PageWrap>
      {loading ? (
        <div className='container page-container'>
          <div className='loading-spin'>
            <Spin />
          </div>
        </div>
      ) : (
        <div className='container page-container'>
          {data?.page?.coverImage && (
            <div className='page-cover'>
              <img src={data?.page?.coverImage} />
            </div>
          )}
          <ListTitlebar title={data?.page?.title} />
          <div className='page-content'>
            <MarkdownContent source={data?.page?.content} />
          </div>
        </div>
      )}
    </PageWrap>
  )
}

export default Page
