'use client'

import styles from './markdown.module.css'
import { Typography } from '@kaynora/ui'
import { NavLink } from './navlink'

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism'

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
  const language = className?.replace('language-', '')

  if (isBlock) {
    return (
      <SyntaxHighlighter
        className={styles['highlighter']}
        language={language}
        style={vscDarkPlus}
        customStyle={{
          backgroundColor: 'var(--backgroundd)',
          border: '1px solid var(--gray-2)',
          borderRadius: 'var(--radius)',
          padding: '15px',
          fontSize: '50%',
        }}
        codeTagProps={{
          style: {
            fontFamily: 'IBM Plex Mono',
          }
        }}
      >
        {children}
      </SyntaxHighlighter>
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
