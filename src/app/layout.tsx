import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Amrita Gautam - Advocate & Assistant Professor',
  description: 'Professional portfolio of Amrita Gautam, Advocate and Assistant Professor at Kathmandu School of Law. Specializing in legal education, human rights, and advocacy.',
  keywords: 'Amrita Gautam, Advocate, Assistant Professor, Kathmandu School of Law, Legal Education, Human Rights, Nepal, Lawyer',
  authors: [{ name: 'Amrita Gautam' }],
  creator: 'Amrita Gautam',
  openGraph: {
    title: 'Amrita Gautam - Advocate & Assistant Professor',
    description: 'Professional portfolio of Amrita Gautam, Advocate and Assistant Professor at Kathmandu School of Law.',
    url: 'https://amritagautam.com',
    siteName: 'Amrita Gautam Portfolio',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Amrita Gautam - Advocate & Assistant Professor',
    description: 'Professional portfolio of Amrita Gautam, Advocate and Assistant Professor at Kathmandu School of Law.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
