'use client'

import { Display } from '@/components/display'
import { Button, T, Checkmark } from '@kaynora/ui'
import { useState } from 'react'

const CheckmarkDisplay = () => {
  const [state, setState] = useState(true)

  return (
    <Display>
      <div style={{
        display: 'flex',
        flexFlow: 'row nowrap',
        gap: '16px',
        alignItems: 'center',
      }}>
        <Checkmark state={state} />
        <Button onClick={() => setState(!state)}>
          <T>Toggle state</T>
        </Button>
      </div>
    </Display>
  )
}

export { CheckmarkDisplay }
