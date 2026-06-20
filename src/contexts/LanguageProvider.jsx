import React, { useContext, useState } from 'react'
import translations from '../public/translations';

export const languageContext = createContext();

export default function LanguageProvider({children}) {

  const [local ,setLocal] = useState('en');

  const toggleLanguage =()=>{
    setLocal((prev) => (prev == 'en' ? 'es' : 'fr'))
  };

  const t = translations[locale];

  return (
    <languageContext.Provider value = {{local, toggleLanguage, t}}>
      {children}
    </languageContext.Provider>
  )
}
