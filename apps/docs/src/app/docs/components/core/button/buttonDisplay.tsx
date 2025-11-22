'use client'

import { Display } from '@/components/display'
import { Button, T } from '@kaynora/ui'
import { useState } from 'react'
import dynamic from 'next/dynamic'

const ButtonDisplay = () => {
  return (
    <Display>
      <Button>
        <T>Login</T>
      </Button>
    </Display>
  )
}

const Modal = dynamic(
  () => import('@kaynora/ui').then(mod => mod.Modal),
  { ssr: false }
)

const ActionsDisplay = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
      <Modal
        isOpen={isModalOpen}
        onOpenChange={() => setIsModalOpen(false)}
      >
        <div style={{
          padding: '40px',
          backgroundColor: 'var(--background)',
          borderRadius: 'var(--radius)',
          textAlign: 'center',
          minWidth: '300px',
        }}>
          <T>You're all caught up!</T>
        </div>
      </Modal>

      <Display>
        <div style={{
          display: 'flex',
          flexFlow: 'row wrap',
          alignItems: 'center',
          gap: '20px',
        }}>
          <Button onClick={() => setIsModalOpen(true)}><T>See Notifications</T></Button>
          <Button href='#'><T>Scroll to Top</T></Button>
        </div>
      </Display>
    </>
  )
}

const SizesDisplay = () => {
  return (
    <Display>
      <div style={{
        display: 'flex',
        flexFlow: 'row wrap',
        alignItems: 'center',
        gap: '20px',
      }}>
        <Button size='s'><T>Create post</T></Button>
        <Button size='m'><T>Create post</T></Button>
        <Button size='l'><T>Create post</T></Button>
      </div>
    </Display>
  )
}

const SurfacesDisplay = () => {
  return (
    <Display>
      <div style={{
        display: 'flex',
        flexFlow: 'row wrap',
        alignItems: 'center',
        gap: '20px',
      }}>
        <Button surface='fill'><T>Dashboard</T></Button>
        <Button surface='outline'><T>Dashboard</T></Button>
        <Button surface='hollow'><T>Dashboard</T></Button>
        <Button surface='text'><T>Dashboard</T></Button>
      </div>
    </Display>
  )
}

const WidthsDisplay = () => {
  return (
    <Display>
      <div style={{
        width: '100%',
        display: 'flex',
        flexFlow: 'column',
        gap: '20px',
      }}>
        <Button width='full'><T>Submit</T></Button>
        <Button width='auto'><T>Submit</T></Button>
      </div>
    </Display>
  )
}

export {
  ButtonDisplay,
  ActionsDisplay,
  SurfacesDisplay,
  SizesDisplay,
  WidthsDisplay,
}
