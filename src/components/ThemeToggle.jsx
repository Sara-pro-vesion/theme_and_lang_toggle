import React from 'react'
import { useTheme } from '../hooks/useTheme';

export default function LangToggle() {
    
    const {theme ,themeToggle } = useTheme();

  return (
    <div>
      <button className='border-none rounded-lg p-1 bg-white absolute left-50' onClick={themeToggle}>{theme}</button>
    </div>
  )
}
