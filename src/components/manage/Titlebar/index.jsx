import React from 'react'
import { TitlebarWrap } from './style'

const Titlebar = ({ title }) => {
  return (
    <TitlebarWrap>
      <div className='title'>{title}</div>
    </TitlebarWrap>
  )
}

export default Titlebar
