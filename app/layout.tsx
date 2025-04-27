import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Tote Bag Store',
  description: 'Created with v0',
  generator: 'Noah OJile',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
