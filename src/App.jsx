import React from 'react'
import Card from './components/Card'
import LangToggle from './components/LangToggle'
import ThemeToggle from './components/ThemeToggle'


export default function App() {
  return (
    <div className='flex justify-center items-center h-[100vh] bg-[#f7f2f2] md:p-1'>
      <div>
        <div className='flex flex-row'>
        </div>
        <Card/>
      </div>
    </div>
  )
}
