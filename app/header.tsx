'use client'

import React from 'react'
import { useRouter, usePathname } from 'next/navigation'
import { ClipboardIcon, Menu, User } from "lucide-react"
import { useState } from 'react'


import Link from 'next/link'

const Header = () => {
  const [isSheetOpen, setIsSheetOpen] = useState(false)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  return (
    <header className="border-b border-gray-200 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="text-xl font-bold text-gray-900">
              AI Checker
            </Link>
            <nav className="hidden md:ml-8 md:flex md:space-x-4">
              <Link href="/about" className="text-gray-600 hover:text-gray-900">About</Link>
              <Link href="/blogs" className="text-gray-600 hover:text-gray-900">Blogs</Link>
              <Link href="/library" className="text-gray-600 hover:text-gray-900">Library</Link>
              <Link href="/pricing" className="text-gray-600 hover:text-gray-900">Pricing</Link>
              <Link href="/contact" className="text-gray-600 hover:text-gray-900">Contact Us</Link>
            </nav>
          </div>
          <div className="flex items-center">
            <div className="relative">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="p-2 rounded-full text-gray-600 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <User className="h-5 w-5" />
                <span className="sr-only">Open profile menu</span>
              </button>
              {isDropdownOpen && (
                <div className="absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                  <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Profile</a>
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Settings</a>
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Log out</a>
                  </div>
                </div>
              )}
            </div>
            <button
              onClick={() => setIsSheetOpen(true)}
              className="ml-2 p-2 rounded-md text-gray-600 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 md:hidden"
            >
              <Menu className="h-5 w-5" />
              <span className="sr-only">Open menu</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
