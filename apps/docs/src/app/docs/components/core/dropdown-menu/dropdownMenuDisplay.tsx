'use client'

import { Display } from '@/components/display'
import { DropdownMenu } from '@kaynora/ui'

const DropdownMenuDisplay = () => {
  return (
    <Display>
      <DropdownMenu
        label='File'
        items={[
          { label: 'New' },
          { label: 'Open' },
          { label: 'Save' },
        ]}
      />
    </Display>
  )
}

const ArrangementDisplay = () => {
  return (
    <Display>
      <div style={{
        display: 'flex',
        gap: '20px',
      }}>
        <DropdownMenu
          label='Vertical'
          arrangement='vertical'
          items={[
            { label: 'Edit' },
            { label: 'Delete' },
          ]}
        />
        <DropdownMenu
          label='Horizontal'
          arrangement='horizontal'
          items={[
            { label: 'Edit' },
            { label: 'Delete' },
          ]}
        />
      </div>
    </Display>
  )
}

const DisabledDisplay = () => {
  return (
    <Display>
      <DropdownMenu
        label='File'
        disabled
        items={[
          { label: 'New' },
          { label: 'Open' },
        ]}
      />
    </Display>
  )
}

export {
  DropdownMenuDisplay,
  ArrangementDisplay,
  DisabledDisplay,
}
