import styles from './Message.module.css'
import { useRef, useState } from 'react'
import { TypographyDefaultsProvider } from '../Typography'
import { useCollapseEffect } from '../../../hooks/useCollapseEffect'

interface MessageProps {
  children: React.ReactElement | React.ReactElement[]
  isVisible?: boolean
  color?: 'primary' | 'dimmed' | 'error' | 'success'
  surface?: 'outline' | 'text'
  internal?: {
    root?: React.HTMLAttributes<HTMLDivElement> & { ref?: React.Ref<HTMLDivElement> }
  }
}

const Message: React.FC<MessageProps> = ({
  children,
  isVisible=true,
  color='primary',
  surface='outline',
  internal,
}) => {
  const [isInternalVisible, setIsInternalVisible] = useState(false)
  const errorRef = useRef<HTMLDivElement>(null)

  const showMessage = (state: boolean) => {
    if (state) setIsInternalVisible(true)
  }

  const hideMessage = (state: boolean) => {
    if (!state) setIsInternalVisible(false)
  }

  useCollapseEffect(errorRef, isVisible, 500, showMessage, hideMessage)

  return (
    <div
      className={styles['message-container']}
      aria-hidden={isVisible}
      {...internal?.root}
    >
      <div
        ref={errorRef}
        className={`
          ${styles['message']} 
          ${styles[surface]} 
          ${styles[color]} 
          ${isVisible ? styles['message-visible'] : ''}
        `}
      >
        {isInternalVisible &&
          <TypographyDefaultsProvider color={color} size='s'>
            {children}
          </TypographyDefaultsProvider>
        }
      </div>
    </div>
  )
}

export { Message }
export type { MessageProps }
