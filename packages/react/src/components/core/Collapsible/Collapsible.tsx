import styles from './Collapsible.module.css'
import { useEffect, useRef, useState } from 'react'
import { Arrow } from '../../icons'
import { Typography, TypographyDefaultsProvider, type TypographyProps } from '../Typography'
import { Button, ButtonDefaultsProvider, type ButtonProps } from '../Button'
import { useCollapseEffect } from '../../../hooks/useCollapseEffect'

interface CollapsibleProps {
  children: React.ReactElement | React.ReactElement[]
  defaultOpen?: boolean
  isOpen?: boolean
  onOpenChange?: (isOpen: boolean) => void
  label: string
  size?: 's' | 'm' | 'l'
  arrangement?: 'leading' | 'trailing'
  internal?: {
    root?: React.HTMLAttributes<HTMLDivElement> & { ref?: React.Ref<HTMLDivElement> }
    button?: ButtonProps
    typography?: TypographyProps
    content?: React.HTMLAttributes<HTMLDivElement> & { ref?: React.Ref<HTMLDivElement> }
  }
}

const Collapsible: React.FC<CollapsibleProps> = ({
  children,
  defaultOpen=false,
  isOpen,
  onOpenChange,
  label,
  size='m',
  arrangement='trailing',
  internal,
}) => {
  const [internalIsOpen, setInternalIsOpen] = useState(defaultOpen)
  const contentRef = useRef<HTMLDivElement>(null)
  const activeIsOpen = isOpen ?? internalIsOpen

  useCollapseEffect(contentRef, activeIsOpen, 500)

  const updateIsOpen = (value: boolean) => {
    if (isOpen === undefined) setInternalIsOpen(value)
    onOpenChange?.(value)
  } 

  useEffect(() => {
    if (contentRef.current) {
      if (activeIsOpen) {
        contentRef.current.removeAttribute('inert')
      } else {
        contentRef.current.setAttribute('inert', '')
      }
    }
  }, [activeIsOpen])

  return (
    <div {...internal?.root}>
      <Button
        onClick={() => updateIsOpen(!activeIsOpen)}
        surface='hollow'
        width='full'
        size={size}
        internal={{
          root: {
            "aria-expanded": activeIsOpen
          }
        }}
        {...internal?.button}
      >
        <div className={`
          ${styles['trigger-content']} 
          ${styles[`arrangement-${arrangement}`]}
        `}>
          <Typography
            size='m'
            weight='400'
            color='primary'
            {...internal?.typography}
          >
            {label}
          </Typography>
          <Arrow state={activeIsOpen} />
        </div>
      </Button>

      <div
        ref={contentRef}
        className={`
          ${styles['content']} 
          ${activeIsOpen && styles['open']}
        `}
        aria-hidden={!activeIsOpen}
        {...internal?.content}
      >
        <ButtonDefaultsProvider
          surface='hollow'
          width='full'
          size={size}
        >
          <TypographyDefaultsProvider color='dimmed'>
            {children}
          </TypographyDefaultsProvider>
        </ButtonDefaultsProvider>
      </div>
    </div>
  )
}

export { Collapsible }
export type { CollapsibleProps }
