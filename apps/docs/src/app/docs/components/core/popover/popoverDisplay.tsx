'use client'

import { Display } from '@/components/display'
import { Popover, Button, T } from '@kaynora/ui'
import { useState } from 'react'

const PopoverDisplay = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Display>
      <div style={{
        position: 'relative',
      }}>
        <Button onClick={() => setIsOpen(!isOpen)}>
          <T>Toggle</T>
        </Button>
        <Popover isOpen={isOpen} onClose={() => setIsOpen(false)}>
          <div style={{
            padding: '40px',
            width: '200px',
            textAlign: 'center',
          }}>
            <T>Popover content</T>
          </div>
        </Popover>
      </div>
    </Display>
  )
}

const ArrangementDisplay = () => {
  const [isOpen1, setIsOpen1] = useState(false)
  const [isOpen2, setIsOpen2] = useState(false)

  return (
    <Display>
      <div style={{
        display: 'flex',
        gap: '40px',
      }}>
        <div style={{ position: 'relative' }}>
          <Button onClick={() => setIsOpen1(!isOpen1)}>
            <T>Vertical</T>
          </Button>
          <Popover isOpen={isOpen1} onClose={() => setIsOpen1(false)} arrangement='vertical'>
            <div style={{
              padding: '40px',
              width: '250px',
              textAlign: 'center',
            }}>
              <T>Vertical popover</T>
            </div>
          </Popover>
        </div>

        <div style={{ position: 'relative' }}>
          <Button onClick={() => setIsOpen2(!isOpen2)}>
            <T>Horizontal</T>
          </Button>
          <Popover isOpen={isOpen2} onClose={() => setIsOpen2(false)} arrangement='horizontal'>
            <div style={{
              padding: '40px',
              width: '250px',
              textAlign: 'center',
            }}>
              <T>Horizontal popover</T>
            </div>
          </Popover>
        </div>
      </div>
    </Display>
  )
}

export {
  PopoverDisplay,
  ArrangementDisplay,
}
