import React, { useState, useEffect } from 'react'
import { usePortfoliosQuery, usePortfolioCategoriesQuery } from '@/hooks'
import { PortfolioList, ListTitlebar } from '@/components'
import { PortfoliosWrap } from './style'

const Portfolios = () => {
  const [page, setPage] = useState(1)
  const [category, setCategory] = useState('')

  useEffect(() => {
    setPage(1)
  }, [category])

  const { data: portfoliosData, loading: portfoliosLoading } = usePortfoliosQuery(page, category)
  const { data: portfolioCategoriesData } = usePortfolioCategoriesQuery()

  return (
    <PortfoliosWrap>
      <div className='container portfolios-container'>
        <ListTitlebar
          title='Portfolios'
          navs={portfolioCategoriesData?.portfolioCategories}
          category={category}
          setCategory={setCategory}
        />

        <PortfolioList
          data={portfoliosData}
          loading={portfoliosLoading}
          page={page}
          setPage={setPage}
        />
      </div>
    </PortfoliosWrap>
  )
}

export default Portfolios
