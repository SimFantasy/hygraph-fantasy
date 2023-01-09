import React, { useCallback, memo } from 'react'
import cx from 'clsx'
import { PaginationWrap } from './style'

const Pagination = ({ page, setPage, totalPages }) => {
  const handleClickPrev = useCallback(() => {
    if (page > 1) {
      setPage(page - 1)
    }
  }, [page, setPage])

  const handleClickNext = useCallback(() => {
    if (page < totalPages) {
      setPage(page + 1)
    }
  }, [page, setPage, totalPages])
  return (
    <PaginationWrap>
      <div className='pagination-info'>
        Page {page} of {totalPages}
      </div>
      <div className='pagination-btns'>
        <button
          className={cx('pagination-btn prev', { disabled: page === 1 })}
          onClick={handleClickPrev}
          disabled={page === 1}
        >
          Previous
        </button>
        <div
          className={cx('pagination-btn next', { disabled: page === totalPages })}
          onClick={handleClickNext}
          disabled={page === totalPages}
        >
          Next
        </div>
      </div>
    </PaginationWrap>
  )
}

export default memo(Pagination)
