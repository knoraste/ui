'use client'

import { Display } from '@/components/display'
import { Invisible, Button, Ellipsis } from '@kaynora/ui'

const InvisibleDisplay = () => {
  return (
    <Display>
      <Button>
        <Invisible>See more</Invisible>
        <Ellipsis />
      </Button>
    </Display>
  )
}

export {
  InvisibleDisplay,
}
