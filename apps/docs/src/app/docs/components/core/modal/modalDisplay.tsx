'use client'

import { Display } from '@/components/display'
import { Button, T } from '@kaynora/ui'
import { useState } from 'react'
import dynamic from 'next/dynamic'

const Modal = dynamic(
  () => import('@kaynora/ui').then(mod => mod.Modal),
  { ssr: false }
)

const ModalDisplay = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <Display>
        <Button onClick={() => setIsOpen(true)}>
          <T>Open Modal</T>
        </Button>
      </Display>

      <Modal isOpen={isOpen} onOpenChange={setIsOpen}>
        <div style={{
          padding: '40px',
          backgroundColor: 'var(--background)',
          borderRadius: 'var(--radius)',
          textAlign: 'center',
          minWidth: '300px',
        }}>
          <T>Modal content goes here</T>
        </div>
      </Modal>
    </>
  )
}

const NestedDisplay = () => {
  const [isOpen1, setIsOpen1] = useState(false)
  const [isOpen2, setIsOpen2] = useState(false)

  return (
    <>
      <Display>
        <Button onClick={() => setIsOpen1(true)}>
          <T>Open First Modal</T>
        </Button>
      </Display>

      <Modal isOpen={isOpen1} onOpenChange={setIsOpen1}>
        <div style={{
          padding: '40px',
          backgroundColor: 'var(--background)',
          borderRadius: 'var(--radius)',
          display: 'flex',
          flexFlow: 'column',
          gap: '20px',
          minWidth: '300px',
        }}>
          <T>First modal</T>
          <Button onClick={() => setIsOpen2(true)}>
            <T>Open Second Modal</T>
          </Button>
        </div>

        <Modal isOpen={isOpen2} onOpenChange={setIsOpen2}>
          <div style={{
            padding: '40px',
            backgroundColor: 'var(--background)',
            borderRadius: 'var(--radius)',
            textAlign: 'center',
            minWidth: '300px',
          }}>
            <T>Second modal</T>
          </div>
        </Modal>
      </Modal>
    </>
  )
}

export {
  ModalDisplay,
  NestedDisplay,
}
