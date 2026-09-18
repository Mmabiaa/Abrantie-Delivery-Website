import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: "Abrantie's Delivery | Accelerating Your Deliveries",
  description: "Fast, reliable and secure doorstep delivery service across Ghana.",
  generator: 'Mmabiaa',
  icons: {
    icon: [
      {
        url: 'https://i.pinimg.com/736x/ca/3f/f3/ca3ff3275b612e4c7c6129445a5fff5f.jpg',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: 'https://i.pinimg.com/736x/ca/3f/f3/ca3ff3275b612e4c7c6129445a5fff5f.jpg',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: 'https://i.pinimg.com/736x/ca/3f/f3/ca3ff3275b612e4c7c6129445a5fff5f.jpg',
        type: 'image/svg+xml',
      },
    ],
    apple: 'https://i.pinimg.com/736x/ca/3f/f3/ca3ff3275b612e4c7c6129445a5fff5f.jpg',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light dark',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
