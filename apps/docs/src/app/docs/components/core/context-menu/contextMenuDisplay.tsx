'use client'

import { Display } from '@/components/display'
import { ContextMenu, T } from '@kaynora/ui'
import { useRef } from 'react'

const ContextMenuDisplay = () => {
  const targetRef = useRef<HTMLDivElement>(null)

  return (
    <Display>
      <ContextMenu
        target={targetRef}
        items={[
          { label: 'Edit' },
          { label: 'Duplicate' },
          { label: 'Delete' },
        ]}
      />

      <div
        ref={targetRef}
        style={{
          padding: '40px',
          border: '1px dashed var(--gray-3)',
          borderRadius: 'var(--radius)',
          textAlign: 'center',
          width: '200px',
        }}
      >
        <T>Right-click here</T>
      </div>
    </Display>
  )
}

export {
  ContextMenuDisplay,
}
