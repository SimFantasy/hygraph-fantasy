import React from 'react'
import { Field, ErrorMessage } from 'formik'
import { FormControlWrap, ErrorText } from './style'

const Input = ({ label, name, ...rest }) => {
  return (
    <FormControlWrap className='form-control'>
      {label && <label htmlFor={name}>{label}</label>}
      <Field id={name} name={name} {...rest} className='form-input' />
      <ErrorMessage name={name} component={ErrorText} />
    </FormControlWrap>
  )
}

export default Input
