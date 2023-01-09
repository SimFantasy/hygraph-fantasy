import React from 'react'

import Input from './Input'
import Textarea from './Textarea'
import Checkbox from './Checkbox'
import Select from './Select'
import Radio from './Radio'
import ArrayInput from './ArrayInput'
import Editor from './Editor'
import Button from './Button'

const FormControl = ({ control, ...rest }) => {
  switch (control) {
    case 'input':
      return <Input {...rest} />
    case 'textarea':
      return <Textarea />
    case 'select':
      return <Select {...rest} />
    case 'radio':
      return <Radio {...rest} />
    case 'checkbox':
      return <Checkbox {...rest} />
    case 'arrayInput':
      return <ArrayInput {...rest} />
    case 'editor':
      return <Editor {...rest} />
    case 'button':
      return <Button {...rest} />
    default:
      return null
  }
}

export default FormControl
