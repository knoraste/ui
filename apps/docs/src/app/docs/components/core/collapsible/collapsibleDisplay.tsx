'use client'

import { Display } from '@/components/display'
import { Collapsible, T } from '@kaynora/ui'

const CollapsibleDisplay = () => {
  return (
    <Display>
      <Collapsible label='Expand'>
        <T>Collapsible content</T>
      </Collapsible>
    </Display>
  )
}

const DefaultOpenDisplay = () => {
  return (
    <Display>
      <Collapsible label='Settings' defaultOpen>
        <T>Default open content</T>
      </Collapsible>
    </Display>
  )
}

const ArrangementDisplay = () => {
  return (
    <Display>
      <div style={{
        display: 'flex',
        flexFlow: 'column',
        gap: '15px',
      }}>
        <Collapsible label='Leading' arrangement='leading'>
          <T>Content</T>
        </Collapsible>
        <Collapsible label='Trailing' arrangement='trailing'>
          <T>Content</T>
        </Collapsible>
      </div>
    </Display>
  )
}

export {
  CollapsibleDisplay,
  DefaultOpenDisplay,
  ArrangementDisplay,
}
