import React, { useState, useEffect } from 'react'
import { useSnippetsQuery, useSnippetCategoriesQuery } from '@/hooks'
import { SnippetList, ListTitlebar } from '@/components'
import { SnippetsWrap } from './style'

const Snippets = () => {
  const [page, setPage] = useState(1)
  const [category, setCategory] = useState('')

  useEffect(() => {
    setPage(1)
  }, [category])

  const { data: snippetsData, loading: snippetsLoading } = useSnippetsQuery(page, category)
  const { data: categoriesData } = useSnippetCategoriesQuery()

  return (
    <SnippetsWrap>
      <div className='container snippets-container'>
        <ListTitlebar
          title='Snippets'
          navs={categoriesData?.snippetCategories}
          category={category}
          setCategory={setCategory}
        />
        <SnippetList data={snippetsData} loading={snippetsLoading} page={page} setPage={setPage} />
      </div>
    </SnippetsWrap>
  )
}

export default Snippets
