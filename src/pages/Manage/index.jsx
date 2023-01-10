import React from 'react'
import { ManageTitlebar, DataCountList } from '@/components'
import { ManageWrap } from './style'

const Manage = () => {
  return (
    <ManageWrap>
      <div className='manage-container dashboard-container'>
        <ManageTitlebar title='Dashboard' />

        <div className='page-block'>
          <DataCountList />
        </div>
      </div>
    </ManageWrap>
  )
}

export default Manage
