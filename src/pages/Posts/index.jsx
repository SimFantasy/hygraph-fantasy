import React, { useState, useEffect } from 'react'
import { usePostsQuery, usePostCategoriesQuery } from '@/hooks'
import { PostList, ListTitlebar } from '@/components'
import { PostsWrap } from './style'

const Posts = () => {
  const [page, setPage] = useState(1)
  const [category, setCategory] = useState('')

  useEffect(() => {
    setPage(1)
  }, [category])

  const { data: postsData, loading: postsLoading } = usePostsQuery(page, category)
  const { data: categoriesData } = usePostCategoriesQuery()

  return (
    <PostsWrap>
      <div className='container posts-container'>
        <ListTitlebar
          title='Posts'
          navs={categoriesData?.postCategories}
          category={category}
          setCategory={setCategory}
        />

        <PostList data={postsData} loading={postsLoading} page={page} setPage={setPage} />
      </div>
    </PostsWrap>
  )
}

export default Posts
