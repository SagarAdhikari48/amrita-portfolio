import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'Amrita Gautam - Advocate & Assistant Professor',
    template: '%s | Amrita Gautam'
  },
  description: 'Dedicated legal professional with expertise in teaching, research, and advocacy. Currently serving as Assistant Professor at Kathmandu School of Law with a passion for human rights and legal education.',
  keywords: [
    'Amrita Gautam',
    'Advocate Nepal',
    'Assistant Professor',
    'Kathmandu School of Law',
    'Legal Professional',
    'Human Rights',
    'Legal Education',
    'Nepal Lawyer',
    'Constitutional Law',
    'Banking Law',
    'Insurance Law'
  ],
  authors: [{ name: 'Amrita Gautam' }],
  creator: 'Amrita Gautam',
  publisher: 'Amrita Gautam',
  metadataBase: new URL('https://amritagautam.com.np'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://amritagautam.com.np',
    title: 'Amrita Gautam - Advocate & Assistant Professor',
    description: 'Dedicated legal professional with expertise in teaching, research, and advocacy. Currently serving as Assistant Professor at Kathmandu School of Law.',
    siteName: 'Amrita Gautam',
    images: [
      {
        url: '/amrita.png',
        width: 1200,
        height: 630,
        alt: 'Amrita Gautam - Professional Portrait',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Amrita Gautam - Advocate & Assistant Professor',
    description: 'Dedicated legal professional with expertise in teaching, research, and advocacy.',
    images: ['/amrita.png'],
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
