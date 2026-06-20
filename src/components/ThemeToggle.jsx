import React from 'react'
import { useTheme } from '../hooks/useTheme';

export default function LangToggle() {
    
    const {theme ,themeToggle } = useTheme();

  const displayTheme = theme === 'light' ? '⏾ ' : '𖤓' ;

  return (
    <div>
      <button className='border-[0.5px] border-white rounded-lg px-1 text-white w-[30px]' onClick={themeToggle}>{displayTheme}</button>
    </div>
  )
}
