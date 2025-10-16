import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { Instrument_Serif } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { ThemeProvider } from '@/components/theme-provider'
import { SmoothScrollProvider } from '@/components/smooth-scroll-provider'
import './globals.css'

const instrumentSerif = Instrument_Serif({
  subsets: ['latin'],
  variable: '--font-instrument-serif',
  weight: '400',
})

export const metadata: Metadata = {
  title: 'HackClub',
  description: 'Join HackClub NUST - where coding is a superpower. Connect with passionate coders, build amazing projects, and push your boundaries.',
  generator: 'HackClub NUST',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/images/logo light without text.png" type="image/png" />
        <style>{`
html {
  font-family: ${GeistSans.style.fontFamily};
  --font-sans: ${GeistSans.variable};
  --font-mono: ${GeistMono.variable};
  --font-instrument-serif: ${instrumentSerif.style.fontFamily};
}
        `}</style>
      </head>
      <body className={`${instrumentSerif.variable}`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange={false}
        >
          <SmoothScrollProvider>
            {children}
          </SmoothScrollProvider>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
