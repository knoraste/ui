'use client'

import { usePathname } from 'next/navigation'

import {
  Layout,
  T,
  Collapsible,
  ButtonDefaultsProvider,
  Button,
} from '@kaynora/ui'

import { NavLink } from '@/components/navlink'
import { QuickNav } from '@/components/quicknav'
import { useEffect, useRef, useState } from 'react'

const SideBarLink = ({ children, href, pathname }: {
  children: React.ReactNode
  href: string
  pathname: string
}) => {
  return (
    <NavLink
      surface={pathname === href ? 'fill' : 'hollow'}
      href={href}
      internal={{
        button: { internal: { root: {
          style: { textAlign: 'left' }
        }}} as any
      }}
    >
      <T
        color='dimmed'
        size='s'
      >
        {children}
      </T>
    </NavLink>
  )
}

export default function DocsLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const [isOpen, setIsOpen] = useState(false)

  const pn = usePathname()
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setIsOpen(false)
  }, [pn])

  return (
    <Layout>
      <Layout.TopNav>
        <div style={{
          display: 'flex',
          flexFlow: 'row nowrap',
          gap: '5px',
          alignItems: 'center',
        }}>
          <Button
            size='s'
            href='https://ui.noraste.dev'
            surface='hollow'
          >
            <T weight='500'>@kaynora/ui</T>
          </Button>

          <Button
            size='s'
            href='https://github.com/kaynora/ui'
            surface='hollow'
            internal={{
              root: {
                target: '_blank',
                rel: 'noopener noreferrer',
              } as any
            }}
          >
            <T weight='300'>Source</T>
          </Button>
        </div>
      </Layout.TopNav>

      <Layout.SideNav isOpen={isOpen} onOpenChange={setIsOpen}>
        <ButtonDefaultsProvider
          size='s'
          width='full'
        >
          <SideBarLink pathname={pn} href='/docs/overview'>Overview</SideBarLink>
          <SideBarLink pathname={pn} href='/docs/getting-started'>Getting started</SideBarLink>
          <SideBarLink pathname={pn} href='/docs/accessibility'>Accessibility</SideBarLink>

          <Collapsible
            defaultOpen={pn.includes('/components')}
            arrangement='leading'
            size='s'
            label='Components'
            internal={{ typography: { size: 's' } as any }} // eslint-disable-line
          >
            <Collapsible
              defaultOpen={pn.includes('/core')}
              arrangement='leading'
              size='s'
              label='Core'
              internal={{ typography: { size: 's' } as any }} // eslint-disable-line
            >
              <SideBarLink pathname={pn} href='/docs/components/core/breadcrumbs'>Breadcrumbs</SideBarLink>
              <SideBarLink pathname={pn} href='/docs/components/core/button'>Button</SideBarLink>
              <SideBarLink pathname={pn} href='/docs/components/core/calendar'>Calendar</SideBarLink>
              <SideBarLink pathname={pn} href='/docs/components/core/checkbox'>Checkbox</SideBarLink>
              <SideBarLink pathname={pn} href='/docs/components/core/collapsible'>Collapsible</SideBarLink>
              <SideBarLink pathname={pn} href='/docs/components/core/context-menu'>Context Menu</SideBarLink>
              <SideBarLink pathname={pn} href='/docs/components/core/date-picker'>Date Picker</SideBarLink>
              <SideBarLink pathname={pn} href='/docs/components/core/dropdown-menu'>Dropdown Menu</SideBarLink>
              <SideBarLink pathname={pn} href='/docs/components/core/message'>Message</SideBarLink>
              <SideBarLink pathname={pn} href='/docs/components/core/field'>Field</SideBarLink>
              <SideBarLink pathname={pn} href='/docs/components/core/invisible'>Invisible</SideBarLink>
              <SideBarLink pathname={pn} href='/docs/components/core/layout'>Layout</SideBarLink>
              <SideBarLink pathname={pn} href='/docs/components/core/menu'>Menu</SideBarLink>
              <SideBarLink pathname={pn} href='/docs/components/core/modal'>Modal</SideBarLink>
              <SideBarLink pathname={pn} href='/docs/components/core/pagination'>Pagination</SideBarLink>
              <SideBarLink pathname={pn} href='/docs/components/core/popover'>Popover</SideBarLink>
              <SideBarLink pathname={pn} href='/docs/components/core/radio'>Radio</SideBarLink>
              <SideBarLink pathname={pn} href='/docs/components/core/select'>Select</SideBarLink>
              <SideBarLink pathname={pn} href='/docs/components/core/slider'>Slider</SideBarLink>
              <SideBarLink pathname={pn} href='/docs/components/core/tabs'>Tabs</SideBarLink>
              <SideBarLink pathname={pn} href='/docs/components/core/theme-provider'>Theme Provider</SideBarLink>
              <SideBarLink pathname={pn} href='/docs/components/core/typography'>Typography</SideBarLink>
            </Collapsible>

            <Collapsible
              defaultOpen={pn.includes('/icons')}
              arrangement='leading'
              size='s'
              label='Icons'
              internal={{ typography: { size: 's' } as any }} // eslint-disable-line
            >
              <SideBarLink pathname={pn} href='/docs/components/icons/alert'>Alert</SideBarLink>
              <SideBarLink pathname={pn} href='/docs/components/icons/arrow'>Arrow</SideBarLink>
              <SideBarLink pathname={pn} href='/docs/components/icons/burger'>Burger</SideBarLink>
              <SideBarLink pathname={pn} href='/docs/components/icons/checkmark'>Checkmark</SideBarLink>
              <SideBarLink pathname={pn} href='/docs/components/icons/ellipsis'>Ellipsis</SideBarLink>
              <SideBarLink pathname={pn} href='/docs/components/icons/spinner'>Spinner</SideBarLink>
              <SideBarLink pathname={pn} href='/docs/components/icons/visibility'>Visibility</SideBarLink>
            </Collapsible>
          </Collapsible>
        </ButtonDefaultsProvider>
      </Layout.SideNav>

      <Layout.Content>
        <div style={{
          display: 'flex',
          flexFlow: 'row-reverse nowrap',
          justifyContent: 'end',
        }}>
          <QuickNav pathname={pn} />
          <div style={{
            overflow: 'hidden',
          }}>
            {children}
          </div>
        </div>
      </Layout.Content>
    </Layout>
  )
}
