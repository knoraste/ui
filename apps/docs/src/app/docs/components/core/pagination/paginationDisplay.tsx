'use client'

import { Display } from '@/components/display'
import { Pagination, T } from '@kaynora/ui'
import { useState } from 'react'

const PaginationDisplay = () => {
  return (
    <Display>
      <Pagination count={10} />
    </Display>
  )
}

const SiblingsDisplay = () => {
  return (
    <Display>
      <div style={{
        display: 'flex',
        flexFlow: 'column',
        gap: '40px',
      }}>
        <Pagination count={10} siblingCount={1} />
        <Pagination count={10} siblingCount={2} />
      </div>
    </Display>
  )
}

const ControlledDisplay = () => {
  const [page, setPage] = useState(1)

  return (
    <Display>
      <div style={{
        display: 'flex',
        flexFlow: 'column',
        gap: '20px',
        alignItems: 'center',
        width: '100%',
      }}>
        <Pagination count={10} value={page} onChange={setPage} />
        <T>Current page: {page}</T>
      </div>
    </Display>
  )
}

export {
  PaginationDisplay,
  SiblingsDisplay,
  ControlledDisplay,
}
