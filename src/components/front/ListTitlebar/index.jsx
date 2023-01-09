import React, { memo, useCallback } from 'react'
import cx from 'clsx'
import { ListTitlebarWrap } from './style'

const ListTitlebar = ({ title, navs, category, setCategory }) => {
  const handleClickCategory = useCallback(categorySlug => {
    setCategory(categorySlug)
  })
  return (
    <ListTitlebarWrap>
      <div className='title'>{title}</div>
      {navs && (
        <div className='title-navs'>
          <div
            className={cx('title-nav-item', { active: category === '' })}
            onClick={() => setCategory('')}
          >
            All
          </div>
          {navs?.map(nav => (
            <div
              key={nav.slug}
              className={cx('title-nav-item', { active: category === nav.slug })}
              onClick={() => handleClickCategory(nav.slug)}
            >
              {nav.name}
            </div>
          ))}
        </div>
      )}
    </ListTitlebarWrap>
  )
}

export default memo(ListTitlebar)
