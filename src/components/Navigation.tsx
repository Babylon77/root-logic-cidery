'use client'

import { useState } from 'react'
import Link from 'next/link'
import OptimizedImage from './OptimizedImage'

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 nav-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center">
              <OptimizedImage
                src="/images/Colonial_Cider.png"
                alt="Colonial Cidery and Orchard Logo"
                                                    width={80}
                  height={80}
                  className="h-16 w-auto"
              />
              <span className="ml-2 text-xl font-semibold text-leaf-green">Colonial Cidery</span>
            </Link>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex md:items-center md:space-x-6">
            <Link href="/" className="text-gray-800 hover:text-leaf-green px-3 py-2 text-sm font-medium">
              Home
            </Link>
            <Link href="/our-story" className="text-gray-800 hover:text-leaf-green px-3 py-2 text-sm font-medium">
              Our Story
            </Link>
            <Link href="/history" className="text-gray-800 hover:text-leaf-green px-3 py-2 text-sm font-medium">
              History
            </Link>
            <Link href="/products" className="text-gray-800 hover:text-leaf-green px-3 py-2 text-sm font-medium">
              Products
            </Link>
            <Link href="/explore" className="text-gray-800 hover:text-leaf-green px-3 py-2 text-sm font-medium">
              Explore
            </Link>
            <Link href="/stay" className="text-gray-800 hover:text-leaf-green px-3 py-2 text-sm font-medium">
              Stay With Us
            </Link>
            <Link href="/business-plan" className="text-gray-800 hover:text-leaf-green px-3 py-2 text-sm font-medium">
              Business Plan
            </Link>
            <Link href="/furniture-restoration" className="text-gray-800 hover:text-leaf-green px-3 py-2 text-sm font-medium">
              Furniture Restoration
            </Link>
            <Link href="/contact" className="text-gray-800 hover:text-leaf-green px-3 py-2 text-sm font-medium">
              Contact
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-500 hover:text-leaf-green hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-leaf-green"
              aria-expanded="false"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <span className="sr-only">Open main menu</span>
              {/* Icon when menu is closed */}
              <svg
                className={`${isMenuOpen ? 'hidden' : 'block'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              {/* Icon when menu is open */}
              <svg
                className={`${isMenuOpen ? 'block' : 'hidden'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden bg-white border-t border-gray-200`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link href="/" className="block text-gray-800 hover:text-leaf-green hover:bg-gray-50 px-3 py-2 text-base font-medium">
            Home
          </Link>
          <Link href="/our-story" className="block text-gray-800 hover:text-leaf-green hover:bg-gray-50 px-3 py-2 text-base font-medium">
            Our Story
          </Link>
          <Link href="/history" className="block text-gray-800 hover:text-leaf-green hover:bg-gray-50 px-3 py-2 text-base font-medium">
            History
          </Link>
          <Link href="/products" className="block text-gray-800 hover:text-leaf-green hover:bg-gray-50 px-3 py-2 text-base font-medium">
            Products
          </Link>
          <Link href="/explore" className="block text-gray-800 hover:text-leaf-green hover:bg-gray-50 px-3 py-2 text-base font-medium">
            Explore
          </Link>
          <Link href="/stay" className="block text-gray-800 hover:text-leaf-green hover:bg-gray-50 px-3 py-2 text-base font-medium">
            Stay With Us
          </Link>
          <Link href="/business-plan" className="block text-gray-800 hover:text-leaf-green hover:bg-gray-50 px-3 py-2 text-base font-medium">
            Business Plan
          </Link>
          <Link href="/furniture-restoration" className="block text-gray-800 hover:text-leaf-green hover:bg-gray-50 px-3 py-2 text-base font-medium">
            Furniture Restoration
          </Link>
          <Link href="/contact" className="block text-gray-800 hover:text-leaf-green hover:bg-gray-50 px-3 py-2 text-base font-medium">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  )
} 