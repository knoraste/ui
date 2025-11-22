'use client'

import { Display } from '@/components/display'
import { ErrorMessage, T, Button } from '@kaynora/ui'
import { useState } from 'react'

const ErrorMessageDisplay = () => {
  return (
    <Display>
      <ErrorMessage state={true}>
        <T>This field is required</T>
      </ErrorMessage>
    </Display>
  )
}

const StateDisplay = () => {
  const [hasError, setHasError] = useState(false)

  return (
    <Display>
      <div style={{
        display: 'flex',
        flexFlow: 'column',
        gap: '20px',
        width: '100%',
      }}>
        <Button onClick={() => setHasError(!hasError)} width='full'>
          <T>Toggle Error</T>
        </Button>

        <ErrorMessage state={hasError}>
          <T>Please enter a valid email address</T>
        </ErrorMessage>
      </div>
    </Display>
  )
}

export {
  ErrorMessageDisplay,
  StateDisplay,
}
