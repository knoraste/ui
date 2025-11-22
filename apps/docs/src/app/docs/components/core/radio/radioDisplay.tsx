'use client'

import { Display } from '@/components/display'
import { Radio, T } from '@kaynora/ui'
import { useState } from 'react'

const RadioDisplay = () => {
  return (
    <Display>
      <Radio name='radio' defaultValue='option2'>
        <Radio.Item value='option1'><T>Option 1</T></Radio.Item>
        <Radio.Item value='option2'><T>Option 2</T></Radio.Item>
      </Radio>
    </Display>
  )
}

const ArrangementDisplay = () => {
  return (
    <Display>
      <div style={{
        display: 'flex',
        flexFlow: 'column',
        gap: '40px',
      }}>
        <Radio name='vertical' arrangement='vertical' defaultValue='a'>
          <Radio.Item value='a'><T>Option A</T></Radio.Item>
          <Radio.Item value='b'><T>Option B</T></Radio.Item>
        </Radio>

        <Radio name='horizontal' arrangement='horizontal' defaultValue='a'>
          <Radio.Item value='a'><T>Option A</T></Radio.Item>
          <Radio.Item value='b'><T>Option B</T></Radio.Item>
        </Radio>
      </div>
    </Display>
  )
}

const ControlledDisplay = () => {
  const [selected, setSelected] = useState('y')

  return (
    <Display>
      <div style={{
        display: 'flex',
        flexFlow: 'column',
        gap: '20px',
        alignItems: 'center',
        width: '100%',
      }}>
        <Radio name='radioControlled' value={selected} onChange={setSelected}>
          <Radio.Item value='x'><T>Option X</T></Radio.Item>
          <Radio.Item value='y'><T>Option Y</T></Radio.Item>
        </Radio>
        <T>Selected: {selected}</T>
      </div>
    </Display>
  )
}

export {
  RadioDisplay,
  ArrangementDisplay,
  ControlledDisplay,
}
