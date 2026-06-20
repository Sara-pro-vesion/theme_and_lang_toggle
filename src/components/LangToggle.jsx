import React from 'react'
import { useLanguage } from '../hooks/useLanguage';

export default function LangToggle() {
    
    const { locale ,toggleLanguage} = useLanguage();

  return (
    <div>
      <button className='border-none rounded-lg p-1 bg-white absolute' onClick={toggleLanguage}>{locale.toUpperCase()}</button>
    </div>
  )
}
