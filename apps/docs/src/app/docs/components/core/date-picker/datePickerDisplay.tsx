'use client'

import { Display } from '@/components/display'
import { DatePicker } from '@kaynora/ui'

const DatePickerDisplay = () => {
  return (
    <Display>
      <DatePicker label='Select date' />
    </Display>
  )
}

const DisabledDisplay = () => {
  return (
    <Display>
      <DatePicker label='Select date' disabled />
    </Display>
  )
}

const RangeDisplay = () => {
  return (
    <Display>
      <DatePicker
        label='Select date'
        minValue={new Date(2025, 0, 10)}
        maxValue={new Date(2025, 0, 24)}
        defaultValue={[new Date(2025, 0, 17)]}
      />
    </Display>
  )
}

export {
  DatePickerDisplay,
  DisabledDisplay,
  RangeDisplay,
}
