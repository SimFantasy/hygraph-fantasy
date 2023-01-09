import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import { useAuth } from '@/hooks'
import { FormControl } from '@/components'
import { supabase } from '@/constants/config'
import { LoginWrap } from './style'

const Login = () => {
  const navigate = useNavigate()
  const { login } = useAuth()

  const initialValues = { email: '', password: '' }
  const validationSchema = Yup.object({
    email: Yup.string().required('Please enter email'),
    password: Yup.string()
      .min(6, 'Please enter at least 6-digit password')
      .required('Please enter password')
  })
  const handleSubmit = async values => {
    const { data, error } = await supabase.auth.signInWithPassword({
      email: values.email,
      password: values.password
    })

    if (error) {
      console.log('login error', error)
    }

    if (data) {
      login(data)
      console.log('login success')
      navigate('/manage')
    }
  }
  return (
    <LoginWrap>
      <div className='container login-container'>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {formik => (
            <Form className='login-form'>
              <FormControl control='input' name='email' placeholder='Email' />
              <FormControl control='input' type='password' name='password' placeholder='Password' />
              <FormControl control='button' text='Login' />
            </Form>
          )}
        </Formik>
      </div>
    </LoginWrap>
  )
}

export default Login
