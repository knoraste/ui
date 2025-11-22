'use client'

import { Display } from '@/components/display'
import { Flyout, Button, T } from '@kaynora/ui'
import { useState } from 'react'

const FlyoutDisplay = () => {
  return (
    <Display>
      <Flyout label='Options'>
        <Button surface='hollow'><T>Edit</T></Button>
        <Button surface='hollow'><T>Delete</T></Button>
      </Flyout>
    </Display>
  )
}

const ArrangementDisplay = () => {
  return (
    <Display>
      <div style={{
        display: 'flex',
        gap: '40px',
      }}>
        <Flyout label='Vertical' arrangement='vertical'>
          <Button surface='hollow'><T>Option 1</T></Button>
          <Button surface='hollow'><T>Option 2</T></Button>
        </Flyout>
        <Flyout label='Horizontal' arrangement='horizontal'>
          <Button surface='hollow'><T>Option 1</T></Button>
          <Button surface='hollow'><T>Option 2</T></Button>
        </Flyout>
      </div>
    </Display>
  )
}

const ControlledDisplay = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Display>
      <Flyout label='Menu' isOpen={isOpen} onOpenChange={setIsOpen}>
        <Button surface='hollow'><T>Edit</T></Button>
        <Button surface='hollow'><T>Delete</T></Button>
      </Flyout>
    </Display>
  )
}

export {
  FlyoutDisplay,
  ArrangementDisplay,
  ControlledDisplay,
}
