import React from 'react'
import { Field, FieldArray, ErrorMessage } from 'formik'
import { FormControlWrap, ErrorText } from './style'

const ArrayInput = ({ label, name, keylabel, valuelabel, ...rest }) => {
  return (
    <FormControlWrap>
      {label && (
        <label htmlFor={name} className='form-label'>
          {label}
        </label>
      )}
      <FieldArray name={name}>
        {({ push, remove, form: { values } }) => {
          const fieldArray = values[name]
          const a1 = fieldArray.map((item, index) => item.text)
          console.log('push', push)
          // console.log(
          //   'fieldArray index',
          //   fieldArray.map((item, index) => index)
          // )
          // console.log('fieldArray item', `gallery[0].text`)
          return (
            <div className='form-array'>
              {fieldArray?.map((item, index) => (
                <div className='grid-cols-3 form-array-item' key={index}>
                  <div className='form-array-item-col'>
                    <label htmlFor={item.text}>{keylabel}</label>
                    <Field name={item.text} type='text' className='form-input' />
                    <ErrorMessage name={item.text} component={ErrorText} />
                  </div>
                  <div className='form-array-item-col'>
                    <label htmlFor={item.url}>{valuelabel}</label>
                    <Field name={item.url} type='text' className='form-input' />
                    <ErrorMessage name={item.url} component={ErrorText} />
                  </div>
                  <div className='form-array-item-col'>
                    {index > 0 && (
                      <button type='button' onClick={() => remove(index)}>
                        {' - '}
                      </button>
                    )}
                    <button type='button' onClick={() => push('')}>
                      {' + '}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )
        }}
      </FieldArray>
    </FormControlWrap>
  )
}

export default ArrayInput
