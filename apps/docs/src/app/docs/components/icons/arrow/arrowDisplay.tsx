'use client'

import { Display } from '@/components/display'
import { Button, T, Arrow } from '@kaynora/ui'
import { useState } from 'react'

const ArrowDisplay = () => {
  const [state, setState] = useState(false)

  return (
    <Display>
      <div style={{
        display: 'flex',
        flexFlow: 'row nowrap',
        gap: '16px',
        alignItems: 'center',
      }}>
        <Arrow state={state} />
        <Button onClick={() => setState(!state)}>
          <T>Toggle state</T>
        </Button>
      </div>
    </Display>
  )
}

export { ArrowDisplay }
