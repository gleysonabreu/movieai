import '../styles/globals.css'
import type { Metadata } from 'next'
import { Outfit } from 'next/font/google'
import Provider from '@/components/Provider'

const outfit = Outfit({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Move AI',
  description: 'Generate movies to you watch!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${outfit.className} bg-brand-gray-dark text-white`}>
        <Provider>
          {children}
        </Provider>
      </body>
    </html>
  )
}
