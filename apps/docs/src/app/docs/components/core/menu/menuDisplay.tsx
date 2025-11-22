'use client'

import { Display } from '@/components/display'
import { Menu } from '@kaynora/ui'

const MenuDisplay = () => {
  return (
    <Display>
      <Menu items={[
        { label: 'Edit' },
        { label: 'View' },
        { label: 'Help' },
      ]} />
    </Display>
  )
}

const SubmenuDisplay = () => {
  return (
    <Display>
      <Menu items={[
        { 
          label: 'File',
          items: [
            { label: 'New' },
            { label: 'Open' },
            { label: 'Save' },
          ]
        },
        { label: 'Edit' },
      ]} />
    </Display>
  )
}

export {
  MenuDisplay,
  SubmenuDisplay,
}
