import React from 'react'
import { FormControlWrap } from './style'

const Button = ({ text, ...rest }) => {
  return (
    <FormControlWrap className='form-control'>
      <button className='form-btn' type='submit' {...rest}>
        {text}
      </button>
    </FormControlWrap>
  )
}

export default Button
