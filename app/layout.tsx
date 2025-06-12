import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Footer from './components/Footer'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Gael Mapwata - Full Stack Developer',
  description: 'Portfolio of Gael Mapwata, a Full Stack Developer with 5+ years of experience in web development.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className={inter.className}>
      <body>
        <main className="min-h-screen bg-white">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
} 