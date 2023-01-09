import React from 'react'
import { Author, Titlebar, PostList, PortfolioList, SnippetList, SiteList } from '@/components'
import {
  useFeaturePostsQuery,
  useFeaturePortfoliosQuery,
  useFeatureSnippetsQuery,
  useFeatureSitesQuery
} from '@/hooks'
import { featurePostsCoverVisible } from '@/constants/settings'
import { HomeWrap } from './style'

const Home = () => {
  const { data: featurePostsData, loading: featurePostsLoading } = useFeaturePostsQuery()
  const { data: featurePortfoliosData, loading: featurePortfoliosLoading } =
    useFeaturePortfoliosQuery()
  const { data: featureSnippetsData, loading: featureSnippetsLoading } = useFeatureSnippetsQuery()
  const { data: featureSitesData, loading: featureSitesLoading } = useFeatureSitesQuery()

  return (
    <HomeWrap>
      <div className='container home-container'>
        <div className='page-block'>
          <Author />
        </div>

        <div className='page-block'>
          <Titlebar title='Posts' route='/posts' />
          <PostList
            data={featurePostsData}
            loading={featurePostsLoading}
            isVisibleCover={featurePostsCoverVisible}
          />
        </div>

        <div className='page-block'>
          <Titlebar title='Portfolios' route='/portfolios' />
          <PortfolioList data={featurePortfoliosData} loading={featurePortfoliosLoading} />
        </div>

        <div className='page-block'>
          <Titlebar title='Snippets' route='/snipptes' />
          <SnippetList data={featureSnippetsData} loading={featureSnippetsLoading} />
        </div>

        <div className='page-block'>
          <Titlebar title='Sites' route='/sites' />
          <SiteList data={featureSitesData} loading={featureSitesLoading} />
        </div>
      </div>
    </HomeWrap>
  )
}

export default Home
