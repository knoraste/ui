'use client'

import { Display } from '@/components/display'
import { Message, T, Button } from '@kaynora/ui'
import { useState } from 'react'

const MessageDisplay = () => {
  return (
    <Display>
      <Message>
        <T>This field is required</T>
      </Message>
    </Display>
  )
}

const StateDisplay = () => {
  const [hasMessage, setHasMessage] = useState(false)

  return (
    <Display>
      <div style={{
        display: 'flex',
        flexFlow: 'column',
        gap: '20px',
        width: '100%',
      }}>
        <Button onClick={() => setHasMessage(!hasMessage)} width='full'>
          <T>Toggle Message</T>
        </Button>

        <Message isVisible={hasMessage}>
          <T>Please enter a valid email address</T>
        </Message>
      </div>
    </Display>
  )
}

const ColorsDisplay = () => {
  return (
    <Display>
      <div style={{
        width: '100%',
        display: 'flex',
        flexFlow: 'column',
        gap: '10px',
      }}>
        <Message color='primary'>
          <T>Primary color</T>
        </Message>

        <Message color='dimmed'>
          <T>Dimmed color</T>
        </Message>

        <Message color='success'>
          <T>Success color</T>
        </Message>

        <Message color='error'>
          <T>Error color</T>
        </Message>
      </div>
    </Display>
  )
}

const SurfacesDisplay = () => {
  return (
    <Display>
      <div style={{
        width: '100%',
        display: 'flex',
        flexFlow: 'column',
        gap: '20px',
      }}>
        <Message surface='outline' color='error'>
          <T>Outline surface</T>
        </Message>

        <Message surface='text' color='error'>
          <T>Text surface</T>
        </Message>
      </div>
    </Display>
  )
}

export {
  MessageDisplay,
  StateDisplay,
  ColorsDisplay,
  SurfacesDisplay,
}
