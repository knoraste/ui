'use client'

import { Display } from '@/components/display'
import { Field } from '@kaynora/ui'
import { useState } from 'react'

const FieldDisplay = () => {
  return (
    <Display>
      <Field label='Full name' />
    </Display>
  )
}

const TypesDisplay = () => {
  return (
    <Display>
      <div style={{
        display: 'flex',
        flexFlow: 'column',
        gap: '15px',
        width: '100%',
      }}>
        <Field label='Email' type='email' />
        <Field label='Password' type='password' />
        <Field label='Age' type='number' />
        <Field label='Message' type='textarea' height='8rem' />
      </div>
    </Display>
  )
}

const LimitDisplay = () => {
  return (
    <Display>
      <Field label='Bio' type='textarea' limit={100} width='100%' />
    </Display>
  )
}

const ErrorDisplay = () => {
  const [value, setValue] = useState('')

  return (
    <Display>
      <Field
        label='Username'
        value={value}
        onChange={setValue}
        errors={[
          { failState: value.length < 3 && value.length > 0, message: 'Minimum 3 characters required' }
        ]}
      />
    </Display>
  )
}

export {
  FieldDisplay,
  TypesDisplay,
  LimitDisplay,
  ErrorDisplay,
}
