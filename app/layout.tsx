import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Geist, Instrument_Serif } from 'next/font/google'
import './globals.css'

const geist = Geist({ subsets: ['latin'], variable: '--font-geist', display: 'swap' })
const instrument = Instrument_Serif({
  subsets: ['latin'],
  weight: '400',
  style: ['normal', 'italic'],
  variable: '--font-instrument',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Eduardo Mailat — Developer & CS student in Cluj-Napoca',
  description:
    'Eduardo Mailat is a Computer Science and Engineering student at UTCN who builds his own apps, experiments with new technology, and spends the rest of his time on basketball courts and mountain trails.',
  generator: 'v0.app',
  authors: [{ name: 'Eduardo Mailat' }],
  openGraph: {
    title: 'Eduardo Mailat',
    description: 'Building things, exploring ideas, and figuring out how everything works.',
    type: 'website',
  },
  icons: {
    icon: [
      { url: '/icon-light-32x32.png', media: '(prefers-color-scheme: light)' },
      { url: '/icon-dark-32x32.png', media: '(prefers-color-scheme: dark)' },
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#0b0b0a',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${geist.variable} ${instrument.variable} bg-background`}>
      <body className="antialiased">
        {children}
        <div className="grain" aria-hidden="true" />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
