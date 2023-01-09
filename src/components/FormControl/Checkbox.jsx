import React from 'react'
import { Field, ErrorMessage } from 'formik'
import cx from 'clsx'
import { RiCheckboxCircleLine, RiCheckboxCircleFill } from 'react-icons/ri'
import { FormControlWrap, ErrorText } from './style'

const Checkbox = ({ label, name, options, ...rest }) => {
  return (
    <FormControlWrap className='form-control'>
      {label && <label htmlFor={name}>{label}</label>}
      <Field id={name} name={name} {...rest}>
        {({ field }) => {
          return (
            <div className='form-options'>
              {options?.map(option => (
                <div className='form-option-item' key={option.key}>
                  <input
                    hidden
                    type='checkbox'
                    id={option.value}
                    value={option.value}
                    checked={Boolean(field.value.includes(option.value))}
                    {...field}
                  />
                  <label htmlFor={option.value} className='form-option-item-icon'>
                    {field.value.includes(option.value) ? (
                      <RiCheckboxCircleFill />
                    ) : (
                      <RiCheckboxCircleLine />
                    )}
                  </label>
                  <label htmlFor={option.value} className='form-option-item-label'>
                    {option.key}
                  </label>
                </div>
              ))}
            </div>
          )
        }}
      </Field>
      <ErrorMessage name={name} component={ErrorText} />
    </FormControlWrap>
  )
}

export default Checkbox
