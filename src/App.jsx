import React from 'react'
import Card from './components/Card'
import LangToggle from './components/LangToggle'
import ThemeToggle from './components/ThemeToggle'


export default function App() {
  return (
    <div>
      <LangToggle/>
      <ThemeToggle/>
      <Card/>
    </div>
  )
}
