import React from 'react'
import { useLanguage } from '../hooks/useLanguage';

export default function LangToggle() {
    
    const { locale ,toggleLanguage} = useLanguage();

  return (
    <div>
      <button className='border-[0.5px] border-white rounded-lg px-1 text-white w-[30px]' onClick={toggleLanguage}>{locale.toUpperCase()}</button>
    </div>
  )
}
