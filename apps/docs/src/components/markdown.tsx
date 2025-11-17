'use client'

import { Typography } from '@kaynora/ui'
import { NavLink } from './navlink'

const slugify = (input: string) => {
  return input
    .toLowerCase()
    .trim()
    .replace(/^\d+\.\s*/, '')
    .replace(/\s+/g, '-')
    .replace(/[^\w\-]+/g, '')
    .replace(/\-+/g, '-')
}

const H1 = ({ children }: { children: string }) => (
  <Typography
    type='h1'
    weight='500'
    internal={{
      root: {
        style: { marginBottom: '20px' }
      }
    }}
  >{children}</Typography>
)

const H2 = ({ children }: { children: string }) => {
  const slug = slugify(children)

  return (
    <NavLink
      surface='text'
      width='auto'
      href={`#${slug}`}
      internal={{
        root: {
          style: {
            marginBottom: '10px',
            marginTop: '40px',
            display: 'block',
            width: 'fit-content',
          },
        }
      }}
    >
      <Typography
        type='h2'
        size='s'
        weight='400'
        internal={{
          root: { id: slug }
        }}
      >
        {children}
      </Typography>
    </NavLink>
  )
}

const H3 = ({ children }: { children: string }) => {
  const slug = slugify(children)

  return (
    <NavLink
      surface='text'
      width='auto'
      href={`#${slug}`}
      internal={{
        root: {
          style: {
            marginBottom: '10px',
            marginTop: '40px',
            display: 'block',
          },
        }
      }}
    >
      <Typography
        type='h3'
        size='xs'
        weight='500'
        internal={{
          root: { id: slug }
        }}
      >
        {children}
      </Typography>
    </NavLink>
  )
}

const H4 = ({ children }: { children: string }) => (
  <Typography
    type='h4'
    size='xs'
    weight='400'
    internal={{
      root: {
        style: { marginBottom: '10px', marginTop: '20px' }
      }
    }}
  >{children}</Typography>
)

const Span = ({ children }: { children: string }) => (
  <Typography>{children}</Typography>
)

const Strong = ({ children }: { children: string }) => (
  <Typography type='span' weight='500'>{children}</Typography>
)

const A = ({ children, href }: { children: React.ReactElement | React.ReactElement[], href: string }) => (
  <NavLink surface='text' href={href} display='inline'>
    <Typography>
      {children}
    </Typography>
  </NavLink>
)

const CodeBlock = ({ children, className }: { children: string; className?: string }) => {
  const isBlock = !!className

  if (isBlock) {
    return (
      <div
        style={{
          padding: '10px',
          backgroundColor: 'var(--gray-1)',
          borderRadius: 'var(--radius)',
          border: '1px solid var(--gray-2)',
          margin: '20px 0',
          overflowX: 'auto',
        }}
      >
        <pre>
          <code className={className}>{children}</code>
        </pre>
      </div>
    )
  }

  return (
    <code style={{
      padding: '2px 4px',
      backgroundColor: 'var(--gray-1)',
      borderRadius: 'var(--radius)',
      border: '1px solid var(--gray-2)',
    }}>{children}</code>
  )
}

export {
  H1,
  H2,
  H3,
  H4,
  Span,
  Strong,
  A,
  CodeBlock,
}
