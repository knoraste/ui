'use client'

import { Display } from '@/components/display'
import { Calendar, T } from '@kaynora/ui'
import { useState } from 'react'

const CalendarDisplay = () => {
  return (
    <Display>
      <Calendar />
    </Display>
  )
}

const TypesDisplay = () => {
  return (
    <Display>
      <div style={{
        display: 'flex',
        flexFlow: 'column',
        gap: '80px',
      }}>
        <Calendar type='single' defaultValue={[new Date(2025, 0, 11)]} />
        <Calendar
          type='multiple'
          defaultValue={[
            new Date(2025, 0, 3),
            new Date(2025, 0, 15),
            new Date(2025, 0, 19),
          ]}
        />
      </div>
    </Display>
  )
}

const ControlledDisplay = () => {
  const [date, setDate] = useState([new Date()])
  return (
    <Display>
      <div style={{
        display: 'flex',
        flexFlow: 'column',
        gap: '40px',
      }}>
        <Calendar value={date} onChange={setDate} />
        <T>Today is: {date[0].toDateString()}</T>
      </div>
    </Display>
  )
}

export {
  CalendarDisplay,
  TypesDisplay,
  ControlledDisplay,
}
