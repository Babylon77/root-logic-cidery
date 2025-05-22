'use client'

import { ReactNode } from 'react'
import Head from 'next/head'
import Navigation from './Navigation'
import Footer from './Footer'

interface LayoutProps {
  children: ReactNode;
  title?: string;
  description?: string;
}

export default function Layout({ children, title, description }: LayoutProps) {
  return (
    <div className="flex flex-col min-h-screen">
      <Head>
        {title && <title>{title}</title>}
        {description && <meta name="description" content={description} />}
      </Head>
      <Navigation />
      <main className="flex-grow pt-16">{children}</main>
      <Footer />
    </div>
  )
} 