import Link from 'next/link'
import { Button, type ButtonProps } from '@kaynora/ui'

interface NavLinkProps extends ButtonProps {
  display?: 'inline' | 'block'
  action?: never
  href: string
}

const NavLink: React.FC<NavLinkProps> = ({
  children,
  display='block',
  width='full',
  href,
  surface='text',
  internal,
}) => {
  return (
    <Link
      href={href}
      tabIndex={-1}
      style={{
        display,
        width: width === 'auto' ? 'fit-content' : 'auto'
      }}
    >
      <Button
        surface={surface}
        internal={{
          root: internal?.root
        }}
      >
        {children}
      </Button>
    </Link>
  )
}

export { NavLink }
