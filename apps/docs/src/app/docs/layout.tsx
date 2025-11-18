'use client'

import { usePathname } from 'next/navigation'

import {
  Layout,
  T,
  Collapsible,
  ButtonDefaultsProvider,
} from '@kaynora/ui'

import { NavLink } from '@/components/navlink'

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
        root: {
          style: { textAlign: 'left' }
        }
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
  children: React.ReactElement | React.ReactElement[]
}>) {
  const pn = usePathname()

  return (
    <Layout>
      <Layout.TopNav><T>TopNav</T></Layout.TopNav>

      <Layout.SideNav>
        <ButtonDefaultsProvider
          size='s'
          width='full'
        >
          <SideBarLink pathname={pn} href='/docs/overview'>Overview</SideBarLink>
          <SideBarLink pathname={pn} href='/docs/getting-started'>Getting started</SideBarLink>
          <SideBarLink pathname={pn} href='/docs/accessibility'>Accessibility</SideBarLink>

          <Collapsible
            arrangement='leading'
            size='s'
            label='Components'
            internal={{ typography: { size: 's' } as any }} // eslint-disable-line
          >
            <Collapsible
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
              <SideBarLink pathname={pn} href='/docs/components/core/dropdown-menu'>Dropdown Menu</SideBarLink>
              <SideBarLink pathname={pn} href='/docs/components/core/error-message'>Error Message</SideBarLink>
              <SideBarLink pathname={pn} href='/docs/components/core/field'>Field</SideBarLink>
              <SideBarLink pathname={pn} href='/docs/components/core/invisible'>Invisible</SideBarLink>
              <SideBarLink pathname={pn} href='/docs/components/core/layout'>Layout</SideBarLink>
              <SideBarLink pathname={pn} href='/docs/components/core/menu'>Menu</SideBarLink>
              <SideBarLink pathname={pn} href='/docs/components/core/modal'>Modal</SideBarLink>
              <SideBarLink pathname={pn} href='/docs/components/core/pagination'>Pagination</SideBarLink>
              <SideBarLink pathname={pn} href='/docs/components/core/popover'>Popover</SideBarLink>
              <SideBarLink pathname={pn} href='/docs/components/core/radio'>Radio</SideBarLink>
              <SideBarLink pathname={pn} href='/docs/components/core/select'>Select</SideBarLink>
              <SideBarLink pathname={pn} href='/docs/components/core/tabs'>Tabs</SideBarLink>
              <SideBarLink pathname={pn} href='/docs/components/core/theme-provider'>Theme Provider</SideBarLink>
              <SideBarLink pathname={pn} href='/docs/components/core/typography'>Typography</SideBarLink>
            </Collapsible>
          </Collapsible>
        </ButtonDefaultsProvider>
      </Layout.SideNav>

      <Layout.Content>
        {children}
      </Layout.Content>
    </Layout>
  )
}
