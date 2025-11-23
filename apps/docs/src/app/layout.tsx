import type { Metadata } from 'next'
import { IBM_Plex_Mono } from 'next/font/google'
 
const mono = IBM_Plex_Mono({
  weight: '400',
  subsets: ['latin'],
})
 

export const metadata: Metadata = {
  title: '@kaynora/ui',
  description: 'A pre-styled component library with 20+ components.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactElement | React.ReactElement[]
}>) {
  return (
    <html
      lang='en'
      data-theme='dark'
      data-scroll-behavior='smooth'
      className={mono.className}
    >
      <body>
        {children}
      </body>
    </html>
  )
}
