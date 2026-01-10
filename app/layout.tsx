import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Shop Client App',
  description: 'Shop Client Application',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  )
}
