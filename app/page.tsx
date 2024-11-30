'use client'

import { useRef, useState } from 'react'
import Link from 'next/link'
import { useRouter, usePathname } from 'next/navigation'
import { RequestText, SampleTextType } from 'models/request_text'
import { Classification, ResponseText } from 'models/response_text'
import { getInputTextResponse } from 'controllers/api_caller'
import CustomToolTip from '@/components/ui/CustomTooltip'
import { getAuth, signInAnonymously, UserCredential } from 'firebase/auth'
import { auth } from './firebase/config'
export default function AITextCheckerWithRouting() {

  const textareaRef = useRef<HTMLTextAreaElement>(null); // Create a ref
  const [text, setText] = useState('')
  const [responseText, setResponseText] = useState<ResponseText | null>(null);
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

  const handleCheck = async () => {
    console.log('Checking for AI...')
    const requestObject: RequestText = {
      timeStamp: Date.now(),
      inputText: text,
      userId: 'mypher0123',
      sampleTextType: SampleTextType.USER
    }
    const responseText: ResponseText | null = await getInputTextResponse(requestObject);
    if (responseText !== null) {
      setResponseText(responseText);
    }

    //also try to anonymoucsly login
    const userCredential: UserCredential = await signInAnonymously(auth);
    console.log("The user credentials are -> ", userCredential);
  }

  const handleClear = () => {
    console.log("Clearing the text");
    setText('');
    setResponseText(null);
  }


  const handleHumanize = () => {
    // Implement humanization logic here
    console.log('Humanizing text...')
    setText("This is a humanized text")
  }

  const getRgbColor = (classification: Classification, score: number) => {
    // let scoreFinal = 1;
    // // if (score === 0) scoreFinal = 0.5;

    return classification === Classification.AI ? `#bf0603` : `#226f54`
  }

  const onSpanSelect = (startIndex: number, endIndex: number) => {
    if (textareaRef.current) {
      textareaRef.current.focus();
      textareaRef.current.setSelectionRange(startIndex, endIndex);
    }
  }


  return (
    <div className="flex flex-col min-h-screen bg-white text-gray-900">
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



      <div className="flex flex-col space-y-2 mx-auto mt-8 pl-[10%] pr-[10%]">

        {responseText?.uid ?
          <h2>Overall Score is : {responseText?.overallScore}</h2> : null
        }
        <div className="flex space-x-2"> {/* Flex container for side-by-side layout */}
          <textarea
            ref={textareaRef}
            placeholder="PASTE YOUR TEXT HERE"
            className="flex-1 min-h-[300px] resize-none border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent leading-[1.75] shadow-inner text-lg"
            value={`${text}`}
            onChange={handleTextChange}
          />
          {responseText ?
            <div
              className="flex-1 min-h-[300px] border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent overflow-y-scroll leading-8 shadow-inner text-lg" // Adjusted width with flex-1
              contentEditable={false} // Change to true if you want to allow user editing
            >
              {
                responseText.sentences ? responseText.sentences.map((sentence, index) => (
                  <CustomToolTip tooltip={`🧑 ${sentence.score}% 🤖 ${100 - sentence.score}%`} key={index}>
                    {/* <span className="bg-gray-900 text-white p-3 rounded"> */}
                    {/*   Show Me Tooltip */}
                    {/* </span> */}
                    <span
                      key={index}
                      className={`inline mr-1 cursor-pointer bg-[B7E0FF] hover:bg-black hover:shadow-md hover:p-1 hover:text-white hover:z-40 leading-8`} // Inline block for better layout control
                      style={{
                        color: getRgbColor(sentence.class, sentence.score)
                      }}
                      onClick={() => onSpanSelect(sentence.startIndex, sentence.endIndex)}
                    >
                      {sentence.sentence}
                      {/* <br /> */}
                    </span>
                  </CustomToolTip>
                )) : null
              }

            </div>
            : null}
        </div>
      </div>


      <div className='flex-grow p-6'>
        <div className="flex items-center justify-between max-w-4xl mx-auto mt-6">
          <div></div>
          <div className="space-x-4">

            <button
              className="px-4 py-2 bg-white text-black-700 border border-gray-300 rounded-lg hover:bg-black hover:text-white focus:outline-none focus:ring-1 focus:ring-gray-300 focus:border-transparent"
              onClick={handleClear}
            >
              CLEAR
            </button>

            <button
              className="px-4 py-2 bg-white text-black-700 border border-gray-300 rounded-lg hover:bg-black hover:text-white focus:outline-none focus:ring-1 focus:ring-gray-300 focus:border-transparent"
              onClick={handleCheck}
            >
              CHECK FOR AI
            </button>
            <button
              className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              onClick={handleHumanize}
            >
              HUMANIZE
            </button>
          </div>
        </div>
      </div>
    </div >
  )
}
