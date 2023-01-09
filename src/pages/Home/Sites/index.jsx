import React, { useState, useEffect } from 'react'
import { useSitesQuery, useSiteCategoriesQuery } from '@/hooks'
import { SiteList, ListTitlebar } from '@/components'
import { SitesWrap } from './style'

const Sites = () => {
  const [page, setPage] = useState(1)
  const [category, setCategory] = useState('')

  useEffect(() => {
    setPage(1)
  }, [category])

  const { data: sitesData, loading: sitesLoading } = useSitesQuery(page, category)
  const { data: categoriesData } = useSiteCategoriesQuery()

  return (
    <SitesWrap>
      <div className='container sites-container'>
        <ListTitlebar
          title='Sites'
          navs={categoriesData?.siteCategories}
          category={category}
          setCategory={setCategory}
        />

        <SiteList data={sitesData} loading={sitesLoading} page={page} setPage={setPage} />
      </div>
    </SitesWrap>
  )
}

export default Sites
