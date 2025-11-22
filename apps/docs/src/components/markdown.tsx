'use client'

import styles from './markdown.module.css'
import { Typography } from '@kaynora/ui'
import { NavLink } from './navlink'
import slugify from '@/utils/slugify'

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'

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
        button: { internal: { root: {
          style: {
            marginBottom: '10px',
            marginTop: '80px',
            display: 'block',
            width: 'fit-content',
          },
        }}} as any
      }}
    >
      <Typography
        type='h2'
        size='s'
        weight='400'
        color='primary'
        internal={{
          root: { id: slug, style: {scrollMarginTop: '70px'} }
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
            width: 'fit-content',
          },
        }
      }}
    >
      <Typography
        type='h3'
        size='xs'
        weight='500'
        color='primary'
        internal={{
          root: { id: slug, style: {scrollMarginTop: '70px'} }
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
        style={{
          'punctuation': { color: 'var(--gray-5)' },
          'entity': { color: 'var(--gray-5)' },
          'url': { color: 'var(--gray-5)' },

          'comment': { color: '#999' },
          'prolog': { color: '#999' },
          'doctype': { color: '#999' },
          'cdata': { color: '#999' },
          'annotation': { color: '#999' },
          'meta': { color: '#999' },

          'keyword': { color: 'var(--accent)' },

          'number': { color: '#fba8a8ff' },

          'boolean': { color: '#ff9494ff' },
          // 'constant': { color: '#ff9494ff' },
          'symbol': { color: '#ff9494ff' },
          'attr-name': { color: '#ff9494ff' },
          'variable': { color: '#ff9494ff' },
          'property': { color: '#ff9494ff' },

          'class-name': { color: '#998affff' },
          'function': { color: '#998affff' },
          'tag': { color: '#998affff' },
          'operator': { color: '#998affff' },

          'attr-value': { color: '#cfc7ffff' },
          'string': { color: '#cfc7ffff' },
          'regex': { color: '#cfc7ffff' },
          'char': { color: '#cfc7ffff' },
          'inserted': { color: '#cfc7ffff' },
        }}
        customStyle={{
          margin: '20px 0',
          backgroundColor: 'var(--background)',
          border: '1px solid var(--gray-2)',
          borderRadius: 'var(--radius)',
          padding: '15px',
          fontSize: '50%',
          overflowX: 'auto',
        }}
        codeTagProps={{
          style: {
            fontFamily: 'IBM Plex Mono, monospace',
          }
        }}
      >
        {children}
      </SyntaxHighlighter>
    )
  }

  return (
    <code style={{
      padding: '0 4px',
      fontFamily: 'IBM Plex Mono, monospace',
      fontSize: '0.85rem',
      fontWeight: '400',
      color: 'var(--accent)',
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
