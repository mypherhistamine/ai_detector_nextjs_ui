'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useRouter, usePathname } from 'next/navigation'
import { ClipboardIcon, Menu, User } from "lucide-react"
import AboutPage from './about/page'
import BlogsPage from './blogs/page'
import LibraryPage from './library/page'
import PricingPage from './pricing/page'
import ContactPage from './contact/page'

export default function AITextCheckerWithRouting() {
  const [text, setText] = useState('')
  const [isWaiting, setIsWaiting] = useState(true)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [isSheetOpen, setIsSheetOpen] = useState(false)
  const router = useRouter()
  const pathname = usePathname()

  const sampleTexts = [
    { name: 'Human', text: 'This is a sample human-written text.' },
    { name: 'AI + Human', text: 'This text was written by AI and edited by a human.' },
    { name: 'ChatGPT', text: 'ChatGPT generated this sample text.' },
    { name: 'GPT4', text: 'This is a sample text from GPT-4.' },
    { name: 'Claude', text: 'Claude AI assistant created this text.' },
    { name: 'Gemini', text: 'Gemini AI model produced this sample text.' },
  ]

  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value)
    setIsWaiting(e.target.value.trim() === '')
  }

  const handleSampleText = (sampleText: string) => {
    setText(sampleText)
    setIsWaiting(false)
  }

  const handlePaste = async () => {
    try {
      const clipboardText = await navigator.clipboard.readText()
      setText(clipboardText)
      setIsWaiting(clipboardText.trim() === '')
    } catch (err) {
      console.error('Failed to read clipboard contents: ', err)
    }
  }

  const handleCheck = () => {
    // Implement AI checking logic here
    console.log('Checking for AI...')

    //make the api hit
  }

  const handleHumanize = () => {
    // Implement humanization logic here
    console.log('Humanizing text...')
    setText("This is a humanized text")
  }


  return (
    <div className="flex flex-col min-h-screen bg-white text-gray-900">
      {/* <header className="border-b border-gray-200 bg-white"> */}
      {/*   <div className="container mx-auto px-4"> */}
      {/*     <div className="flex h-16 items-center justify-between"> */}
      {/*       <div className="flex items-center"> */}
      {/*         <Link href="/" className="text-xl font-bold text-gray-900"> */}
      {/*           AI Checker */}
      {/*         </Link> */}
      {/*         <nav className="hidden md:ml-8 md:flex md:space-x-4"> */}
      {/*           <Link href="/about" className="text-gray-600 hover:text-gray-900">About</Link> */}
      {/*           <Link href="/blogs" className="text-gray-600 hover:text-gray-900">Blogs</Link> */}
      {/*           <Link href="/library" className="text-gray-600 hover:text-gray-900">Library</Link> */}
      {/*           <Link href="/pricing" className="text-gray-600 hover:text-gray-900">Pricing</Link> */}
      {/*           <Link href="/contact" className="text-gray-600 hover:text-gray-900">Contact Us</Link> */}
      {/*         </nav> */}
      {/*       </div> */}
      {/*       <div className="flex items-center"> */}
      {/*         <div className="relative"> */}
      {/*           <button */}
      {/*             onClick={() => setIsDropdownOpen(!isDropdownOpen)} */}
      {/*             className="p-2 rounded-full text-gray-600 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500" */}
      {/*           > */}
      {/*             <User className="h-5 w-5" /> */}
      {/*             <span className="sr-only">Open profile menu</span> */}
      {/*           </button> */}
      {/*           {isDropdownOpen && ( */}
      {/*             <div className="absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5"> */}
      {/*               <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu"> */}
      {/*                 <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Profile</a> */}
      {/*                 <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Settings</a> */}
      {/*                 <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Log out</a> */}
      {/*               </div> */}
      {/*             </div> */}
      {/*           )} */}
      {/*         </div> */}
      {/*         <button */}
      {/*           onClick={() => setIsSheetOpen(true)} */}
      {/*           className="ml-2 p-2 rounded-md text-gray-600 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 md:hidden" */}
      {/*         > */}
      {/*           <Menu className="h-5 w-5" /> */}
      {/*           <span className="sr-only">Open menu</span> */}
      {/*         </button> */}
      {/*       </div> */}
      {/*     </div> */}
      {/*   </div> */}
      {/* </header> */}
      {isSheetOpen && (
        <div className="fixed inset-0 overflow-hidden z-50">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute inset-0 bg-gray-500 bg-opacity-75 transition-opacity" onClick={() => setIsSheetOpen(false)}></div>
            <section className="absolute inset-y-0 right-0 pl-10 max-w-full flex">
              <div className="w-screen max-w-md">
                <div className="h-full flex flex-col py-6 bg-white shadow-xl overflow-y-scroll">
                  <div className="px-4 sm:px-6">
                    <div className="flex items-start justify-between">
                      <h2 className="text-lg font-medium text-gray-900">Menu</h2>
                      <button
                        onClick={() => setIsSheetOpen(false)}
                        className="rounded-md text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      >
                        <span className="sr-only">Close panel</span>
                        <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <div className="mt-6 relative flex-1 px-4 sm:px-6">
                    <nav className="flex flex-col space-y-4">
                      <Link href="/about" className="text-gray-600 hover:text-gray-900">About</Link>
                      <Link href="/blogs" className="text-gray-600 hover:text-gray-900">Blogs</Link>
                      <Link href="/library" className="text-gray-600 hover:text-gray-900">Library</Link>
                      <Link href="/pricing" className="text-gray-600 hover:text-gray-900">Pricing</Link>
                      <Link href="/contact" className="text-gray-600 hover:text-gray-900">Contact Us</Link>
                    </nav>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      )}
      {/* <main className="flex-grow p-6"> */}
      {/*   <h2> Render content </h2> */}
      {/*   {renderContent()} */}
      {/* </main> */}


      <div className='flex-grow p-6'>
        <div className="flex flex-col space-y-4 max-w-4xl mx-auto">
          <textarea
            placeholder="PASTE YOUR TEXT HERE"
            className="flex-grow min-h-[300px] resize-none border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            value={text}
            onChange={handleTextChange}
          />
          <div className="space-y-2">
            <p className="text-sm font-medium text-gray-700">Try sample text:</p>
            <div className="flex flex-wrap gap-2">
              {sampleTexts.map((sample) => (
                <button
                  key={sample.name}
                  className="px-3 py-1 bg-white text-gray-700 border border-gray-300 rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  onClick={() => handleSampleText(sample.text)}
                >
                  {sample.name}
                </button>
              ))}
              <button
                className="px-3 py-1 bg-white text-gray-700 border border-gray-300 rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent flex items-center"
                onClick={handlePaste}
              >
                <ClipboardIcon className="w-4 h-4 mr-2" />
                Paste Your Text
              </button>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between max-w-4xl mx-auto mt-6">
          <div className="text-sm font-medium text-gray-700">
            {isWaiting ? 'WAITING FOR YOUR INPUT' : 'READY TO ANALYZE'}
          </div>
          <div className="space-x-2">
            <button
              className="px-4 py-2 bg-white text-gray-700 border border-gray-300 rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              onClick={handleCheck}
            >
              CHECK FOR AI
            </button>
            <button
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              onClick={handleHumanize}
            >
              HUMANIZE
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
