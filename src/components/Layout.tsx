'use client'

import { ReactNode } from 'react'
import Navigation from './Navigation'
import Footer from './Footer'
import SiteHead from './SiteHead'

interface LayoutProps {
  children: ReactNode;
  title?: string;
  description?: string;
}

export default function Layout({ children, title, description }: LayoutProps) {
  return (
    <div className="flex flex-col min-h-screen">
      <SiteHead title={title} description={description} />
      <Navigation />
      <main className="flex-grow pt-16">{children}</main>
      <Footer />
    </div>
  )
} 