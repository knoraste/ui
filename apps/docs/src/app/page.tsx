'use client'

import { T } from '@kaynora/ui'
import { NavLink } from '@/components/navlink'

export default function Home() {
  return (
    <div style={{
      width: '100vw',
      height: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexFlow: 'column',
      gap: '20px',
    }}>
      <T type='h1' size='xs' weight='500'>@kaynora/ui</T>
      <NavLink href='/docs/overview' surface='text'><T>Go to docs</T></NavLink>
    </div>
  )
}
