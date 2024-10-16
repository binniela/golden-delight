import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Golden Delight - Vietnamese Cuisine',
  description: 'Experience authentic Vietnamese cuisine at Golden Delight',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}